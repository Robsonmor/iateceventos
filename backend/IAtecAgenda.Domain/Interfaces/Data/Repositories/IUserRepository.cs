using System.Threading.Tasks;
using IdentityServer4.Validation;
using IAtecAgenda.Domain.Entities;

namespace IAtecAgenda.Domain.Interfaces.Data.Repositories
{
    public interface IUserRepository
    {
        #region IUserRepository Members

        Task<Usuario> FindBySubjectIdAsync(string subjectId);
        Task<Usuario> FindByUsernameAsync(string username, string domain);
        Task<GrantValidationResult> ValidateCredentialsAsync(string username, string password, string domain = "local");

        #endregion
    }
}
