using System;
using System.Net;
using System.Linq;
using FluentValidation;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using IAtecAgenda.Api.Extensions;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Enumerations;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using IAtecAgenda.Domain.Contracts.Responses;
using static IAtecAgenda.Domain.Contracts.Responses.ErrorResponse;

namespace IAtecAgenda.Api.Infrastructure
{
    public class ApiExceptionMiddleware
    {
        #region Private Read-Only Fields

        private readonly ILogger _logger;
        private readonly RequestDelegate _next;
        private readonly IActionResultExecutor<ObjectResult> _executor;
        private static readonly ActionDescriptor _actionDescriptor = new ActionDescriptor();

        #endregion

        #region Constructors

        public ApiExceptionMiddleware(RequestDelegate next, IActionResultExecutor<ObjectResult> executor, ILoggerFactory loggerFactory)
        {
            _next = next;
            _executor = executor;
            _logger = loggerFactory.CreateLogger<ApiExceptionMiddleware>();
        }

        #endregion

        #region Public Methods

        public async Task Invoke(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(httpContext, ex);
            }
        }

        #endregion

        #region Private Methods

        private Task HandleExceptionAsync(HttpContext httpContext, Exception exception)
        {
            httpContext.Response.ContentType = "application/json";

            if (exception is ArgumentNullException)
                httpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            else if(exception is ValidationException)
                httpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            else
                httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            var error = new ErrorResponse(message: exception.Message, code: EnumResponseCode.Generico);
            if (exception.GetInnerExceptions().Any())
                error.Errors = exception.GetInnerExceptions().Select(x => x.Message).ToList();


            var response = SerializationHelper.SerializeToJson(error);

            return httpContext.Response.WriteAsync(response);
        }

        #endregion
    }
}
