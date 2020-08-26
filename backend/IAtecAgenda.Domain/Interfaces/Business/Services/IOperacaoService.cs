using FluentValidation;
using System.Threading.Tasks;
using System.Collections.Generic;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Domain.Interfaces.Business.Services
{
    public interface IOperacaoService : IGenericService<Operacao, int, IValidator<Operacao>, IOperacaoRepository>
    {
        #region IOperacaoService Members

        Task<Operacao> Find(int operacaoId);
        Task<IEnumerable<Operacao>> GetAll(bool? hasTemplate);
        Task<PagedListEntity<Operacao>> PagedList(int pageSize, int pageIndex, int? operacaoGrupoId, string nome);

        #endregion
    }
}
