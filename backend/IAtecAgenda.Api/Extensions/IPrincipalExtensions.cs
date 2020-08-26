using System;
using System.Linq;
using System.Security.Claims;
using System.Collections.Generic;
using IAtecAgenda.Domain.Constants;

namespace IAtecAgenda.Api.Extensions
{
    /// <summary>
    /// Objeto com funções principais
    /// </summary>
    public static class IPrincipalExtensions
    {
        #region Extension Methods

        /// <summary>
        /// GetUserId
        /// </summary>
        /// <param name="principal">principal</param>
        /// <returns>string</returns>
        public static string GetUserId(this ClaimsPrincipal principal)
        {
            if (principal == null)
                throw new ArgumentNullException(nameof(principal));

            return principal.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

        /// <summary>
        /// GetUserName
        /// </summary>
        /// <param name="principal">principal</param>
        /// <returns>string</returns>
        public static string GetUserName(this ClaimsPrincipal principal)
        {
            if (principal == null)
                throw new ArgumentNullException(nameof(principal));

            return principal.FindFirst(ClaimTypes.Name)?.Value;
        }

        /// <summary>
        /// GetEmail
        /// </summary>
        /// <param name="principal">principal</param>
        /// <returns>string</returns>
        public static string GetEmail(this ClaimsPrincipal principal)
        {
            if (principal == null)
                throw new ArgumentNullException(nameof(principal));

            return principal.FindFirst(ClaimTypes.Email)?.Value;
        }

        /// <summary>
        /// Retorna os códigos de unidades de negócio associados ao usuário
        /// </summary>
        /// <param name="principal">Instâcia de autenticação do usuário logado</param>
        /// <returns>Coleção de códigos de unidades de negócio</returns>
        public static IEnumerable<int> GetBusinessUnits(this ClaimsPrincipal principal)
        {
            if (principal == null)
                throw new ArgumentNullException(nameof(principal));

            return principal.FindAll(IdentityServerApiConstants.StandardClaims.BusinessUnit)?
                .Select(x => Convert.ToInt32(x.Value));
        }

        /// <summary>
        /// GetRoles
        /// </summary>
        /// <param name="principal">principal</param>
        /// <returns>IEnumerable string</returns>
        public static IEnumerable<string> GetRoles(this ClaimsPrincipal principal)
        {
            if (principal == null)
                throw new ArgumentNullException(nameof(principal));

            return principal.FindAll(ClaimTypes.Role)?.Select(x => x.Value);
        }

        /// <summary>
        /// IsInRole
        /// </summary>
        /// <param name="principal">principal</param>
        /// <param name="roles">roles</param>
        /// <returns>bool</returns>
        public static bool IsInRole(this ClaimsPrincipal principal, params string[] roles)
        {
            foreach (var role in roles)
            {
                if (principal.IsInRole(role))
                    return true;
            }

            return false;
        }

        #endregion
    }
}
