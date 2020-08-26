using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using IAtecAgenda.Api.Extensions;
using IAtecAgenda.Core.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace IAtecAgenda.Api
{
    public class Startup
    {
        #region Public Properties

        public IConfiguration Configuration { get; }
        public IHostingEnvironment HostingEnvironment { get; }

        #endregion

        #region Constructors

        public Startup(IConfiguration configuration, IHostingEnvironment hostingEnviroment)
        {
            Configuration = configuration;
            HostingEnvironment = hostingEnviroment;
        }

        #endregion

        #region Public Methods

        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddSingleton(Configuration)
                .AddSingleton(HostingEnvironment);

            services
                .AddCoreDependencies(enableSensitiveData: HostingEnvironment.IsDevelopment())
                .AddDataWarehouseDependencies();

            services
                .ConfigureCulture()
                .ConfigureCaching()
                .ConfigureCompression()
                .ConfigureMvc()
                .ConfigureApiVersion()
                .ConfigureAuthorization()
                .ConfigureIdentityServer()
                .ConfigureAuthentication()
                .ConfigureSwagger();
                //.ConfigureHangfire();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider serviceProvider)
        {
            app
                .UseCors(x => x
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials()
                    .WithExposedHeaders("Content-Disposition")
                )
                .UseMiddlewareConfiguration()
                .UseCultureConfiguration()
                .UseResponseCompression()
                .UseResponseCaching()
               
                .UseAuthentication()
                .UseIdentityServer()
                .UseMvc()
                .UseSwaggerConfiguration();
        }
        
        #endregion
    }
}
