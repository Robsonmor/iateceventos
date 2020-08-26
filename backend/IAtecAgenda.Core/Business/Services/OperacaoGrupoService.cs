using System;
using System.Linq;
using FluentValidation;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;
using System.Collections.Generic;

namespace IAtecAgenda.Core.Business.Services
{
    public sealed class OperacaoGrupoService : GenericService<OperacaoGrupo, int, IValidator<OperacaoGrupo>, IOperacaoGrupoRepository>, IOperacaoGrupoService
    {
        #region Constructors

        public OperacaoGrupoService(ILogger<OperacaoService> logger, IValidator<OperacaoGrupo> validator, IOperacaoGrupoRepository repository)
            : base(logger, validator, repository)
        { }

        #endregion

        #region IOperacaoGrupoService Members

        public async Task<PagedListEntity<OperacaoGrupo>> PagedList(int pageSize, int pageIndex, string nome)
        {
            return await _repository.PagedList(pageIndex, pageSize,
                predicate: p => p.Nome.Contains(nome ?? string.Empty)
                , orderBy: o => o.OrderBy(p => p.Nome)
            );
        }

        #endregion

        #region Overriden Methods

        public override async Task<OperacaoGrupo> Get(int id)
        {
            return await _repository.Find(
               predicate: x => x.Id == id
               , include: x => x.Include(i => i.Operacoes)
            );
        }

        public override async Task Create(OperacaoGrupo entity)
        {
            entity.Id = await GenerateId();

            await _validator.ValidateAndThrowAsync(entity);
            await _repository.Create(entity);
        }

        public override async Task<IEnumerable<OperacaoGrupo>> GetAll()
        {
            return await _repository.GetAll(
                include: x => x
                    .Include(i => i.Operacoes)
            );
        }


        #endregion

        #region Private Methods

        private async Task<int> GenerateId()
        {
            int max;
            try
            {
                max = await _repository.Max(p => p.Id, predicate: x => x.Id != 90000000);
            }
            catch
            {
                max = 0;
            }
            return max + 1000000;
        }

        #endregion
    }
}
