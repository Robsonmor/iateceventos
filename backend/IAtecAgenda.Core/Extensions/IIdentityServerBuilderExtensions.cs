using IAtecAgenda.Core.Infrastructure;
using IAtecAgenda.Core.Business.Services;
using IAtecAgenda.Core.Data.Repositories;
using Microsoft.Extensions.DependencyInjection;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Core.Extensions
{
    public static class IIdentityServerBuilderExtensions
    {
        #region Extension Methods

        public static IIdentityServerBuilder AddCustomUserStore(this IIdentityServerBuilder builder)
        {
            builder.Services.AddScoped<IUserRepository, UserRepository>();
          //  builder.AddProfileService<ProfileService>();
            builder.AddResourceOwnerValidator<ResourceOwnerPasswordValidator>();

            return builder;
        }

        #endregion
    }
}
