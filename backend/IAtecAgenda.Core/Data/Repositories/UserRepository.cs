using System;
using System.Net;
using IdentityModel;
using System.Net.Http;
using Newtonsoft.Json;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityServer4.Models;
using IdentityServer4.Validation;
using IAtecAgenda.Core.Helpers;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Constants;
using IAtecAgenda.Core.Infrastructure;
using IAtecAgenda.Domain.Enumerations;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Core.Data.Repositories
{
    public sealed class UserRepository : IUserRepository
    {
        #region Private Read-Only Fields

        private readonly ILogger<UserRepository> _logger;
        private readonly UserManager<Usuario> _userManager;
        private readonly SignInManager<Usuario> _signInManager;

        #endregion

        #region Constructors

        public UserRepository(ILogger<UserRepository> logger, UserManager<Usuario> userManager, SignInManager<Usuario> signInManager)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
            _signInManager = signInManager ?? throw new ArgumentNullException(nameof(signInManager));
        }

        #endregion

        #region IUserRepository Members

        public async Task<Usuario> FindByUsernameAsync(string username, string domain)
        {
            var credential = $@"{domain}\{username}";
            return await _userManager.FindByNameAsync(credential);
        }

        public async Task<Usuario> FindBySubjectIdAsync(string subjectId)
        {
            return await _userManager.FindByIdAsync(subjectId);
        }

        public async Task<GrantValidationResult> ValidateCredentialsAsync(string username, string password, string domain = "local")
        {
            var user = await FindByUsernameAsync(username, domain);
            if (user == null)
            {
                if (domain.Equals("local"))
                    return new GrantValidationResult(
                        TokenRequestErrors.InvalidGrant,
                        IdentityServerApiConstants.GrantResultMessages.UserDoesNotExists
                    );

                var credential = await ValidateRemoteCredentialsAsync(username, password, domain);
                if (credential != null)
                    await RegisterRemoteCredentialsAsync(username, domain, credential);

                return new GrantValidationResult(
                    TokenRequestErrors.InvalidGrant,
                    IdentityServerApiConstants.GrantResultMessages.UnauthorizedUser
                );
            }

            if (user.StatusId != (int)EnumUsuarioStatus.Ativo)
                return new GrantValidationResult(
                    TokenRequestErrors.InvalidGrant,
                    IdentityServerApiConstants.GrantResultMessages.UnauthorizedUser
                );

            if (domain.Equals("local"))
            {
                var isGranted = await ValidateLocalCredentialsAsync(user, password);
                if (isGranted)
                    return new GrantValidationResult(user.Id, OidcConstants.AuthenticationMethods.Password);
            }
            else
            {
                var credential = await ValidateRemoteCredentialsAsync(username, password, domain);
                if (credential != null)
                    return new GrantValidationResult(user.Id, OidcConstants.AuthenticationMethods.Password);
            }

            return new GrantValidationResult(
                TokenRequestErrors.InvalidGrant,
                IdentityServerApiConstants.GrantResultMessages.UnauthorizedUser
            );
        }

        #endregion

        #region Private Methods

        private async Task<IdentityResult> RegisterRemoteCredentialsAsync(string username, string domain, LDAPEntity credential)
        {
            var user = new Usuario
            {
                Name = credential.Name.Trim(),
                Surname = credential.Surname.Trim(),
                UserName = $@"{domain}\{username}",
                NormalizedUserName = $@"{domain}\{username}".ToUpper(),
                Email = credential.Email,
                NormalizedEmail = credential.Email?.ToUpper(),
                EmailConfirmed = true,
                StatusId = (int)EnumUsuarioStatus.Pendente
            };

            var result = await _userManager.CreateAsync(user);
            if (result.Succeeded)
            {
                await _userManager.SetLockoutEnabledAsync(user, false);
                await _userManager.AddClaimAsync(user, new Claim(IdentityServerApiConstants.StandardClaims.JobRole, credential.JobRole));
                await _userManager.AddClaimAsync(user, new Claim(IdentityServerApiConstants.StandardClaims.Department, credential.Department));
            }

            return result;
        }

        private async Task<LDAPEntity> ValidateRemoteCredentialsAsync(string username, string password, string domain)
        {
            ConfigHelper.TryGet("GlobalConfig:ActiveDirectoryEndpoint", out string endpoint);
            var uri = new Uri(endpoint);

            try
            {
                using (var httpClient = new HttpClient())
                {
                    var content = new { usuario = username, senha = password.Base64Encode(), dominio = domain };
                    var response = await httpClient.PostAsync(uri.AbsoluteUri, content, JsonConfig.Configure().MediaTypeFormatter);

                    if (response.StatusCode == HttpStatusCode.OK)
                    {
                        var result = await response.Content.ReadAsAsync<LDAPEntity>();
                        return result;
                    }
                    else if (response.StatusCode == HttpStatusCode.NotFound)
                        return null;
                    else
                        response.EnsureSuccessStatusCode();
                }
            }
            catch (HttpRequestException ex) { _logger.LogError(ex, "Ocorreu um erro de comunicação com LDAP API."); }
            catch (Exception ex) { _logger.LogError(ex, "Ocorreu um erro na validação de credênciais de acesso."); }

            return null;
        }

        private async Task<bool> ValidateLocalCredentialsAsync(Usuario user, string password, bool lockoutOnFailure = false)
        {
            var result = await _signInManager.CheckPasswordSignInAsync(user, password, lockoutOnFailure);
            return result.Succeeded;
        }

        #endregion

        #region Private Classes

        private sealed class LDAPEntity
        {
            #region Public Properties

            [JsonProperty("email")]
            public string Email { get; set; }

            [JsonProperty("nome")]
            public string Name { get; set; }

            [JsonProperty("sobrenome")]
            public string Surname { get; set; }

            [JsonProperty("nomeCompleto")]
            public string FullName { get; set; }

            [JsonProperty("cargo")]
            public string JobRole { get; set; }

            [JsonProperty("departamento")]
            public string Department { get; set; }

            #endregion
        }

        #endregion
    }
}
