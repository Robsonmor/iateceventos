using FluentValidation;
using System.Threading.Tasks;
using System.Collections.Generic;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Domain.Interfaces.Business.Services
{
    public interface IEventoService : IGenericService<Evento, int, IValidator<Evento>, IEventoRepository>
    {
        #region IEventoService Members

        Task<Evento> Find(int EventoId);
        Task<IEnumerable<Evento>> GetAll(bool? hasTemplate, int? operacaoId);
        Task<PagedListEntity<Evento>> PagedList(int pageSize, int pageIndex, int? operacaoId, string nome);
        Task<int> MaxByOperacao(int operacaoId);
        Task<Evento> FindUpdate(int EventoId);

        #endregion
    }
}
