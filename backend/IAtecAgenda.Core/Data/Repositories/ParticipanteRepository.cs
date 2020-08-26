using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Core.Data.Repositories
{
    public sealed class ParticipanteRepository : GenericRepository<Participante, int>, IParticipanteRepository
    {
        #region Constructors

        public ParticipanteRepository(EFContext dbContext, ILogger<IParticipanteRepository> logger)
            : base(dbContext, logger)
        { }

        #endregion

        #region Overriden Methods

        public override async Task Update(Participante entity)
        {
            var existing = await _dbContext.Set<Participante>()
                .Include(i => i.ParticipantesEvento)
                .FirstOrDefaultAsync(x => x.Id == entity.Id);

            if (existing != null)
            {
                existing.ParticipantesEvento.RemoveAll(x => x.ParticipanteId == entity.Id);
                existing.ParticipantesEvento = entity.ParticipantesEvento;

                _dbContext.Entry(existing).CurrentValues.SetValues(entity);
            }
        }

        #endregion
    }
}
