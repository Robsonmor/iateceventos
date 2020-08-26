using System;
using System.Threading.Tasks;

namespace IAtecAgenda.Domain.Interfaces.Business
{
    public interface IUnitOfWork : IDisposable
    {
        #region IUnitOfWork Members

        int Complete();
        Task<int> CompleteAsync();

        #endregion
    }
}
