using System.Linq;
using FluentValidation;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;
using IAtecAgenda.Core.Extensions;
using System.Linq.Expressions;
using System;

namespace IAtecAgenda.Core.Business.Services
{
    public class ParticipanteService : GenericService<Participante, int, IValidator<Participante>, IParticipanteRepository>, IParticipanteService
    {
        #region Constructors

        public ParticipanteService(ILogger<ParticipanteService> logger, IValidator<Participante> validator, IParticipanteRepository repository)
            : base(logger, validator, repository)
        { }

        #endregion

        #region Overriden Methods

        public override async Task<Participante> Get(int id)
        {
            return await _repository.Find(
                predicate: p => p.Id == id
                , include: p => p
                    .Include(i => i.ParticipantesEvento)
                        .ThenInclude(i => i.Evento)
            );
        }

        public override async Task Create(Participante entity)
        {
            entity.Id = await GenerateId();

            await _validator.ValidateAndThrowAsync(entity);
            await _repository.Create(entity);
        }

        #endregion

        #region IParticipante Members

        public async Task<PagedListEntity<Participante>> PagedList(string descricaoMotivo, int pageIndex, int pageSize)
        {
            Expression<Func<Participante, bool>> predicate = null;

            if (!descricaoMotivo.IsNullOrWhiteSpace())
                predicate = predicate.And(x => x.Nome.Contains(descricaoMotivo));

            return await _repository.PagedList(
                pageIndex, pageSize,
                predicate,
                orderBy: o => o.OrderBy(x => x.Nome)
            );
        }

        #endregion

        #region Private Methods

        private async Task<int> GenerateId()
        {
            var max = await _repository.Max(x => x.Id, predicate: x => x.Id != 9999);
            return max + 1;
        }

        #endregion
    }
}
