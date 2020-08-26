using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;
using FluentValidation;
using System.Threading.Tasks;

namespace IAtecAgenda.Domain.Interfaces.Business.Services
{
    public interface IOperacaoGrupoService : IGenericService<OperacaoGrupo, int, IValidator<OperacaoGrupo>, IOperacaoGrupoRepository>
    {

        #region IOperacaoGrupoService Members

        Task<PagedListEntity<OperacaoGrupo>> PagedList(int pageSize, int pageIndex, string nome);

        #endregion
    }
}
