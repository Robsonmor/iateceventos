using System;
using System.Threading.Tasks;
using IAtecAgenda.Core.Data;
using IAtecAgenda.Domain.Interfaces.Business;

namespace IAtecAgenda.Core.Business
{
    public sealed class UnitOfWork : IUnitOfWork
    {
        #region Private Read-Only Fields

        private readonly EFContext _dbContext;

        #endregion

        #region Constructors

        public UnitOfWork(EFContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        #endregion

        #region IUnitOfWork Members

        public int Complete()
        {
            return _dbContext.SaveChanges();
        }

        public async Task<int> CompleteAsync()
        {
            return await _dbContext.SaveChangesAsync();
        }

        public void Dispose()
        {
            if (_dbContext != null)
                _dbContext.Dispose();
        }

        #endregion
    }
}
