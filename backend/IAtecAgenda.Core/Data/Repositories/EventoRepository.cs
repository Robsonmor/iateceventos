using Microsoft.Extensions.Logging;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Core.Data.Repositories
{
    public sealed class EventoRepository : GenericRepository<Evento, int>, IEventoRepository
    {
        #region Constructors

        public EventoRepository(EFContext dbContext, ILogger<EventoRepository> logger)
            : base(dbContext, logger)
        { }

        #endregion
    }
}
