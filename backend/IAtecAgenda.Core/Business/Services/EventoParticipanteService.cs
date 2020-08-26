using FluentValidation;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IAtecAgenda.Core.Business.Services
{
    public class EventoParticipanteService : GenericService<EventoParticipante, int, IValidator<EventoParticipante>, IEventoParticipanteRepository>, IEventoParticipanteService
    {
        #region Constructors

        public EventoParticipanteService(ILogger<EventoParticipante> logger, IValidator<EventoParticipante> validator, IEventoParticipanteRepository repository)
            : base(logger, validator, repository)
        { }

     

        #endregion

        #region EventoParticipanteService Members

        public async Task<IEnumerable<EventoParticipante>> GetByEvento(int EventoId)
        {
            return await _repository.FindAll(
                predicate: x => x.Evento.Id == EventoId,
                include: x => x
                    .Include(p => p.Participante)
                    .Include(p => p.Evento)
            );
        }

        public async void DeleteByEvento(int EventoId)
        {
           var list = await _repository.FindAll(x => x.Evento.Id == EventoId);
            foreach (var item in list)
                await _repository.Delete(item);

        }

        #endregion
    }
}
