using IdentityServer4.Models;

namespace IAtecAgenda.Domain.Constants
{
    /// <summary>
    /// Objeto de configuração de infraestrutura da identidade Credcesta
    /// </summary>
    public static class IdentityServerApiConstants
    {
        public const string ResourceName = "interfile.core";
        public const string ResourceDisplayName = "API - Interfile Core";

        public static class StandardScopes
        {
     
        }

        public static class GrantResultMessages
        {
            public const string UserDoesNotExists = "Usuário e/ou senha inválidos.";
            public const string UnauthorizedUser = "Usuário não autorizado na plataforma.";
        }

        public static class StandardClaims
        {
            public const string RoleId = "urn:platform:roleid";
            public const string JobRole = "urn:platform:jobrole";
            public const string Department = "urn:platform:department";
            public const string BusinessUnit = "urn:platform:bu";
        }
    }
}