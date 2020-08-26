using System;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using IAtecAgenda.Domain.Constants;

namespace IAtecAgenda.Api.Extensions
{
    public static class HttpContextExtensions
    {
        #region Extension Methods

        public static string UrlTo(this HttpContext httpContext, string fileName, string gallery)
        {
            return UrlTo(httpContext, fileName, ApiConstants.StaticFiles.ResourcePath, gallery, new string[] { });
        }

        public static string UrlTo(this HttpContext httpContext, string fileName, string gallery, string path)
        {
            return UrlTo(httpContext, fileName, ApiConstants.StaticFiles.ResourcePath, gallery, new string[] { path });
        }

        public static string UrlTo(this HttpContext httpContext, string fileName, string gallery, params string[] paths)
        {
            return UrlTo(httpContext, fileName, ApiConstants.StaticFiles.ResourcePath, gallery, paths);
        }

        #endregion

        #region Private Methods

        private static string UrlTo(this HttpContext httpContext, string fileName, string basePath, string gallery, params string[] paths)
        {
            var uri = new UriBuilder();
            var req = httpContext.Request;

            uri.Scheme = req.Scheme;
            uri.Host = req.Host.Host;
            uri.Port = req.Host.Port ?? uri.Port;

            var combined = Path.Combine(basePath, gallery);

            if (paths != null && paths.Any())
            {
                foreach (var path in paths)
                    combined = Path.Combine(combined, path);
            }

            uri.Path = Path.Combine(combined, fileName);

            return uri.Uri.AbsoluteUri;
        }

        #endregion
    }
}
