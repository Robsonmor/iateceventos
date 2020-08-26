using System.Threading.Tasks;

namespace IAtecAgenda.Domain.Interfaces.Business.Services
{
    public interface IAutenticacaoService
    {
        Task<string> ValidaCredencial(string nome, string senha, string dominio);
    }
}
