using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Identity;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Constants;
using IAtecAgenda.Domain.Enumerations;

namespace IAtecAgenda.Core.Infrastructure
{
    public class ClaimsIdentityFactory : UserClaimsPrincipalFactory<Usuario>
    {
        #region Constructors

        public ClaimsIdentityFactory(UserManager<Usuario> userManager, IOptions<IdentityOptions> optionsAccessor)
            : base(userManager, optionsAccessor)
        { }

        #endregion

        #region Overriden Methods

        public async override Task<ClaimsPrincipal> CreateAsync(Usuario user)
        {
            var principal = await base.CreateAsync(user);
            var roles = await UserManager.GetRolesAsync(user);

            ((ClaimsIdentity)principal.Identity).AddClaim(new Claim(ClaimTypes.GivenName, user.Name ?? ""));
            ((ClaimsIdentity)principal.Identity).AddClaim(new Claim(ClaimTypes.Surname, user.Surname ?? ""));
            ((ClaimsIdentity)principal.Identity).AddClaim(new Claim(ClaimTypes.Email, user.Email));
            ((ClaimsIdentity)principal.Identity).AddClaim(new Claim(ClaimTypes.Name, user.UserName));

            foreach (var role in roles)
            {
                ((ClaimsIdentity)principal.Identity).AddClaim(new Claim(ClaimTypes.Role, role));

                if (Enum.TryParse(typeof(EnumPerfil), role, true, out var item))
                    ((ClaimsIdentity)principal.Identity).AddClaim(new Claim(IdentityServerApiConstants.StandardClaims.RoleId, ((int)(EnumPerfil)item).ToString()));
            }

            return principal;
        }

        #endregion
    }
}
