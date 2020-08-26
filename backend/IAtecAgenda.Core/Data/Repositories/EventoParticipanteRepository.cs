using Microsoft.Extensions.Logging;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Core.Data.Repositories
{
    public sealed class EventoParticipanteRepository : GenericRepository<EventoParticipante, int>, IEventoParticipanteRepository
    {
        #region Constructors

        public EventoParticipanteRepository(EFContext dbContext, ILogger<EventoParticipanteRepository> logger)
            : base(dbContext, logger)
        { }

        #endregion
    }
}
