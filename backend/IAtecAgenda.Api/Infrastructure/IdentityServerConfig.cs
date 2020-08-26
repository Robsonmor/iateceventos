using IAtecAgenda.Core.Helpers;
using IAtecAgenda.Domain.Constants;
using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;

namespace IAtecAgenda.Api.Infrastructure
{
    internal sealed class ApiClient
    {
        #region Public Properties

        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
        public int AccessTokenLifetime { get; set; }

        #endregion
    }

    /// <summary>
    /// Objeto de configuração de infraestrutura da identidade
    /// </summary>
    public static class IdentityServerConfig
    {
        /// <summary>
        /// GetApiResources
        /// </summary>
        /// <returns>IEnumerable ApiResource</returns>
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new ApiResource[]
            {
                new ApiResource(IdentityServerApiConstants.ResourceName, IdentityServerApiConstants.ResourceDisplayName)
                {
                    Scopes = {
                        new Scope(IdentityServerConstants.StandardScopes.OpenId),
                        new Scope(IdentityServerConstants.StandardScopes.Profile),
                    },
                    UserClaims = {
                        ClaimTypes.Name,
                        ClaimTypes.Role,
                        ClaimTypes.Email,
                        ClaimTypes.GivenName,
                        ClaimTypes.Surname,
                        IdentityServerApiConstants.StandardClaims.RoleId,
                        IdentityServerApiConstants.StandardClaims.JobRole,
                        IdentityServerApiConstants.StandardClaims.Department,
                        IdentityServerApiConstants.StandardClaims.BusinessUnit
                    }
                }
            };
        }

        /// <summary>
        /// GetClients
        /// </summary>
        /// <returns>IEnumerable Client</returns>
        public static IEnumerable<Client> GetClients()
        {
            var output = new List<Client>();
            ConfigHelper.TryGet<Domain.Infrastructure.IdentityServerConfig>("IdentityServerConfig", out var configuration);

            if (configuration.Clients != null && configuration.Clients.Any())
            {
                // ApiClient - FrontendAPP
                var frontendApp = configuration.Clients.FirstOrDefault(x => x.ClientId.Equals("frontend.app"));
                if (frontendApp != null)
                {
                    output.Add(new Client
                    {
                        ClientId = frontendApp.ClientId,
                        ClientSecrets = { new Secret(frontendApp.ClientSecret.Sha256()) },
                        AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                        AllowOfflineAccess = true,
                        AllowedScopes = {
                            IdentityServerApiConstants.ResourceName,
                            IdentityServerConstants.StandardScopes.OpenId,
                            IdentityServerConstants.StandardScopes.Profile,
                            IdentityServerConstants.StandardScopes.OfflineAccess,
                        },
                        RefreshTokenUsage = TokenUsage.ReUse,
                        RefreshTokenExpiration = TokenExpiration.Sliding,
                        AccessTokenLifetime = frontendApp.AccessTokenLifetime
                    });
                }
            }

            return output;
        }
    }
}