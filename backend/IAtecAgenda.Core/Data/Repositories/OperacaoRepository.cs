using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Core.Data.Repositories
{
    public sealed class OperacaoRepository : GenericRepository<Operacao, int>, IOperacaoRepository
    {
        #region Constructors

        public OperacaoRepository(EFContext dbContext, ILogger<OperacaoRepository> logger)
            : base(dbContext, logger)
        { }

        #endregion       
    }
}
