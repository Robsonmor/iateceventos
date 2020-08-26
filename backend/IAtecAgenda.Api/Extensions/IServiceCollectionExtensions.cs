using AutoMapper;
using IAtecAgenda.Api.Infrastructure;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Core.Helpers;
using IAtecAgenda.Core.Infrastructure;
using IAtecAgenda.Domain.Constants;
using IAtecAgenda.Domain.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using NSwag;
using NSwag.Generation.Processors.Security;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography.X509Certificates;

namespace IAtecAgenda.Api.Extensions
{
    public static class IServiceCollectionExtensions
    {
        #region Extension Methods

        public static void AddApiDependencies(this IServiceCollection services)
        {
            AutoMapperConfig.Configure();

            services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();
            services.AddScoped(x => {
                var actionContext = x.GetRequiredService<IActionContextAccessor>().ActionContext;
                var factory = x.GetRequiredService<IUrlHelperFactory>();
                return factory.GetUrlHelper(actionContext);
            });

            services.Configure<RequestLocalizationOptions>(options =>
            {
                options.DefaultRequestCulture = new RequestCulture("pt-BR");
                options.SupportedCultures = new List<CultureInfo> { new CultureInfo("pt-BR") };
                options.RequestCultureProviders.Clear();
            });

            services.AddAutoMapper(Assembly.GetExecutingAssembly());
        }

        public static IServiceCollection ConfigureCaching(this IServiceCollection services)
        {
            services.AddMemoryCache();
            services.AddResponseCaching();

            return services;
        }

        public static IServiceCollection ConfigureCulture(this IServiceCollection services)
        {
            services.Configure<RequestLocalizationOptions>(options =>
            {
                options.DefaultRequestCulture = new RequestCulture("pt-BR");
                options.SupportedCultures = new List<CultureInfo> { new CultureInfo("pt-BR") };
                options.RequestCultureProviders.Clear();
            });

            return services;
        }

        public static IServiceCollection ConfigureCompression(this IServiceCollection services)
        {
            services.AddResponseCompression(options =>
            {
                options.EnableForHttps = true;
                options.Providers.Add<GzipCompressionProvider>();
                options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(
                    new[] { "image/png", "image/jpg", "image/jpeg" }
                );
            });            

            services.Configure<GzipCompressionProviderOptions>(
                options => options.Level = CompressionLevel.Optimal
            );

            return services;

        }

        public static IServiceCollection ConfigureMvc(this IServiceCollection services)
        {
            services
                .AddMvcCore(options =>
                {
                    var schemaPolicy = new AuthorizationPolicyBuilder()
                        .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                        .RequireAuthenticatedUser()
                        .Build();

                    options.Filters.Add(new AuthorizeFilter(schemaPolicy));
                })
                .AddDataAnnotations()
                .AddJsonFormatters()
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.Formatting = Formatting.None;
                    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                    options.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.None;
                    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

                    options.SerializerSettings.Converters.Add(new StringEnumConverter());
                    options.SerializerSettings.Converters.Add(new IsoDateTimeConverter());
                })
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2);


            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.InvalidModelStateResponseFactory = (context) =>
                {
                    var response = context.ModelState.ToErrorResponse();
                    return new BadRequestObjectResult(response);
                };
            });
            return services;
        }

        public static IServiceCollection ConfigureIdentityServer(this IServiceCollection services)
        {
            var hostingEnviroment = services.BuildServiceProvider().GetService<IHostingEnvironment>();

            services
                .AddIdentityServer()
                .AddSigningCredential(new X509Certificate2(Path.Combine(hostingEnviroment.ContentRootPath, "Certs", "certificadocore.pfx")))
                .AddInMemoryApiResources(IdentityServerConfig.GetApiResources())
                .AddInMemoryClients(IdentityServerConfig.GetClients())
                .AddAspNetIdentity<Usuario>()
                .AddCustomUserStore();

            return services;
        }

        public static IServiceCollection ConfigureSwagger(this IServiceCollection services)
        {
            var availableScopes = new Dictionary<string, string>();

            ConfigHelper.TryGet<Domain.Infrastructure.SwaggerConfig>("SwaggerConfig", out var swaggerConfig);
            ConfigHelper.TryGet<Domain.Infrastructure.IdentityServerConfig>("IdentityServerConfig", out var identityConfig);

            services.AddSwaggerDocument(config =>
            {
                config.Title = swaggerConfig.Title;
                config.Version = swaggerConfig.Version;
                config.Description = swaggerConfig.Description;

                config.PostProcess = document =>
                {
                    document.Info.Title = swaggerConfig.Title;
                    document.Info.Version = $"v{swaggerConfig.Version}";
                    document.Info.Description = swaggerConfig.Description;
                    document.Schemes = new OpenApiSchema[] { OpenApiSchema.Https };
                };

                config.OperationProcessors.Add(new OperationSecurityScopeProcessor("JWT"));

                config.DocumentProcessors.Add(new SecurityDefinitionAppender("JWT", new string[] { }, new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Flow = OpenApiOAuth2Flow.Password,
                    Type = OpenApiSecuritySchemeType.OAuth2,
                    In = OpenApiSecurityApiKeyLocation.Header,
                    Scheme = JwtBearerDefaults.AuthenticationScheme,
                    TokenUrl = identityConfig.TokenUrl,
                    AuthorizationUrl = identityConfig.AuthorizationUrl,
                    Scopes = availableScopes
                }));
            });

            return services;
        }

        public static IServiceCollection ConfigureAuthorization(this IServiceCollection services)
        {
            services.AddAuthorization(options =>
            {
                options.AddPolicy(IdentityServerApiConstants.ResourceName, p => p.RequireScope(IdentityServerApiConstants.ResourceName));
            });

            return services;
        }

        public static IServiceCollection ConfigureApiVersion(this IServiceCollection services)
        {
            services.AddVersionedApiExplorer(options =>
            {
                options.SubstituteApiVersionInUrl = true;
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.DefaultApiVersion = new ApiVersion(1, 0);
            });

            services.AddApiVersioning(options =>
            {
                options.ReportApiVersions = true;
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.DefaultApiVersion = new ApiVersion(1, 0);
            });

            return services;
        }

        public static IServiceCollection ConfigureAuthentication(this IServiceCollection services)
        {
            var hostingEnviroment = services.BuildServiceProvider().GetService<IHostingEnvironment>();
            var certificate = new X509Certificate2(Path.Combine(hostingEnviroment.ContentRootPath, "Certs", "certificadocore.pfx"));

            ConfigHelper.TryGet<Domain.Infrastructure.IdentityServerConfig>("IdentityServerConfig", out var configuration);

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.Authority = configuration.Authority;

                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateAudience = true,
                        ValidAudiences = new string[] { IdentityServerApiConstants.ResourceName },
                        ValidateIssuer = true,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new X509SecurityKey(certificate),
                        ValidateLifetime = true,
                        ClockSkew = TimeSpan.Zero
                    };
                });

            return services;
        }

        #endregion
    }
}
