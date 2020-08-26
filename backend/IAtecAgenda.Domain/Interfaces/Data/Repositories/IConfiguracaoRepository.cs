using System.Threading.Tasks;
using IAtecAgenda.Domain.Entities;

namespace IAtecAgenda.Domain.Interfaces.Data.Repositories
{
    public interface IConfiguracaoRepository : IBaseRepository
    {
        #region IConfiguracaoRepository Members

        Task<Configuracao> Get(string grupo, string chave);

        #endregion
    }
}
