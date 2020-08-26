using System.Threading.Tasks;
using IAtecAgenda.Domain.Entities;

namespace IAtecAgenda.Domain.Interfaces.Business.Services
{
    public interface IConfiguracaoService : IBaseService
    {
        #region IConfiguracaoService Members

        Task<Configuracao> Get(string grupo, string chave);
        Task<string> GetValor(string grupo, string chave);
        Task<TValor> GetValor<TValor>(string grupo, string chave) where TValor : struct;
        bool TryGetValor<TValor>(string grupo, string chave, out TValor output) where TValor : struct;
        Task<TParametros> GetParametros<TParametros>(string grupo, string chave) where TParametros : class;

        #endregion
    }
}
