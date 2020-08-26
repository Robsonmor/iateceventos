using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IAtecAgenda.Core.Business.Services
{
    public sealed class OperacaoService : GenericService<Operacao, int, IValidator<Operacao>, IOperacaoRepository>, IOperacaoService
    {
        #region Constructors

        public OperacaoService(ILogger<OperacaoService> logger, IValidator<Operacao> validator, IOperacaoRepository repository)
            : base(logger, validator, repository)
        { }

        #endregion

        #region Overriden Methods

        public override async Task<IEnumerable<Operacao>> GetAll()
        {
            return await _repository.GetAll();
        }

        public override async Task Create(Operacao entity)
        {
            entity.Id = await GenerateId(entity.OperacaoGrupoId);

            await _validator.ValidateAndThrowAsync(entity);
            await _repository.Create(entity);
        }

        #endregion

        #region IOperacaoService Members

        public async Task<Operacao> Find(int operacaoId)
        {
            return await _repository.Find(
                predicate: x => x.Id == operacaoId
                , include: x => x.Include(p => p.OperacaoGrupo)
            );
        }

        public async Task<IEnumerable<Operacao>> GetAll(bool? hasTemplate)
        {
            return await _repository.GetAll();
        }

        public async Task<PagedListEntity<Operacao>> PagedList(int pageSize, int pageIndex, int? operacaoGrupoId, string nome)
        {
            return await _repository.PagedList(pageIndex, pageSize,
                predicate: p => p.OperacaoGrupoId == (operacaoGrupoId ?? p.OperacaoGrupoId) 
                                && p.Nome.Contains(nome ?? string.Empty) 
                , orderBy: p => p.OrderBy(x => x.Nome)
                , include: p => p.Include(x => x.OperacaoGrupo)
            );
        }

        #endregion

        #region Private Methods

        private async Task<int> GenerateId(int operacaoGrupoId)
        {
            int max;
            try
            {
                max = await _repository.Max(p => p.Id, predicate: x => x.OperacaoGrupoId == operacaoGrupoId);
            }
            catch {
                max = operacaoGrupoId;
            }
            
            return max + 10000;
        }

        #endregion
    }
}
