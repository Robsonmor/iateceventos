using FluentValidation;
using System.Threading.Tasks;
using System.Collections.Generic;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Domain.Interfaces.Business.Services
{
    public interface IEventoParticipanteService : IGenericService<EventoParticipante, int, IValidator<EventoParticipante>, IEventoParticipanteRepository>
    {
        #region IEventoParticipanteService Members

        Task<IEnumerable<EventoParticipante>> GetByEvento(int EventoId);
        void DeleteByEvento(int EventoId);
        #endregion
    }
}
