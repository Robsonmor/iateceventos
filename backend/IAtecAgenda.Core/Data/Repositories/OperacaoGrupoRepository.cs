using Microsoft.Extensions.Logging;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Core.Data.Repositories
{
    public sealed class OperacaoGrupoRepository : GenericRepository<OperacaoGrupo, int>, IOperacaoGrupoRepository
    {
        #region Constructors
        public OperacaoGrupoRepository(EFContext dbContext, ILogger<OperacaoGrupoRepository> logger)
            : base(dbContext, logger)
        { }
        #endregion
    }
}
