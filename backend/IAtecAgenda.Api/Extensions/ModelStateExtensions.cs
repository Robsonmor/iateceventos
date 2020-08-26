using System.Linq;
using IAtecAgenda.Domain.Enumerations;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using IAtecAgenda.Domain.Contracts.Responses;
using static IAtecAgenda.Domain.Contracts.Responses.ErrorResponse;

namespace IAtecAgenda.Api.Extensions
{
    public static class ModelStateExtensions
    {
        #region Extension Methods

        public static ErrorResponse ToErrorResponse(this ModelStateDictionary modelState)
        {
            var output = new ErrorResponse("Dados inválidos, verifique os dados e envie novamente.", EnumResponseCode.Generico)
            {
                Errors = modelState.Values.SelectMany(x => x.Errors)
                .Select(x => x.ErrorMessage).ToArray()
            };

            return output;
        }

        #endregion
    }
}
