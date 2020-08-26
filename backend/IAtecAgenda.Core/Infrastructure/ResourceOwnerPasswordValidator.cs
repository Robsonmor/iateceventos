using System;
using System.Threading.Tasks;
using IdentityServer4.Validation;
using Microsoft.Extensions.Logging;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Core.Infrastructure
{
    public sealed class ResourceOwnerPasswordValidator : IResourceOwnerPasswordValidator
    {
        #region Private Read-Only Fields

        private readonly IUserRepository _userRepository;
        private readonly ILogger<ResourceOwnerPasswordValidator> _logger;

        #endregion

        #region Constructors

        public ResourceOwnerPasswordValidator(ILogger<ResourceOwnerPasswordValidator> logger, IUserRepository userRepository)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
        }

        #endregion

        #region IResourceOwnerPasswordValidator Members

        public async Task ValidateAsync(ResourceOwnerPasswordValidationContext context)
        {
            var domain = context.Request.Raw.GetValue("domain", defaultValue: "local");
            context.Result = await _userRepository.ValidateCredentialsAsync(context.UserName, context.Password, domain);
        }

        #endregion
    }
}
