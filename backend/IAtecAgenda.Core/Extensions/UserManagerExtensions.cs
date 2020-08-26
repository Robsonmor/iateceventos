using IAtecAgenda.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace IAtecAgenda.Core.Extensions
{
    public static class UserManagerExtensions
    {
        public static async Task<string> GetNomeCompletoUsuario(this UserManager<Usuario> user,string userId)
        {
            var userObj = await user?.Users?.SingleOrDefaultAsync(x => x.Id == userId);

            var fullName = $"{userObj.Name} {userObj.Surname}";

            return fullName.Trim();
        }      
    }
}
