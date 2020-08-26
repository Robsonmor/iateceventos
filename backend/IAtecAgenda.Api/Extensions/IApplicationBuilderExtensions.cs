using IAtecAgenda.Api.Infrastructure;
using IAtecAgenda.Core.Helpers;
using IAtecAgenda.Domain.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Localization;
using System.Globalization;

namespace IAtecAgenda.Api.Extensions
{
    public static class IApplicationBuilderExtensions
    {
        #region Extension Methods

        public static IApplicationBuilder UseCultureConfiguration(this IApplicationBuilder app)
        {
            var supportedCultures = new[] { new CultureInfo("pt-BR") };

            app.UseRequestLocalization(new RequestLocalizationOptions
            {
                DefaultRequestCulture = new RequestCulture(culture: "pt-BR", uiCulture: "pt-BR"),
                SupportedCultures = supportedCultures,
                SupportedUICultures = supportedCultures
            });

            return app;
        }      

        public static IApplicationBuilder UseSwaggerConfiguration(this IApplicationBuilder app)
        {
            ConfigHelper.TryGet<SwaggerConfig>("SwaggerConfig", out var swaggerConfig);

            app
                .UseOpenApi(options => options.Path = swaggerConfig.Document.Path)
                .UseSwaggerUi3(options => options.DocumentPath = swaggerConfig.Document.Path);

            return app;
        }        

        public static IApplicationBuilder UseMiddlewareConfiguration(this IApplicationBuilder app)
        {
            app.UseMiddleware<ApiExceptionMiddleware>();
            return app;
        }

        #endregion
    }
}
