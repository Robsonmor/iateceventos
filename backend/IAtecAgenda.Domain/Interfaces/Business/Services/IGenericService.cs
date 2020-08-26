using System;
using FluentValidation;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Collections.Generic;
using IAtecAgenda.Domain.Interfaces.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Domain.Interfaces.Business.Services
{
    public interface IGenericService<TEntity, TKey, TValidator, TRepository> : IBaseService
        where TEntity : class, IBaseEntity
        where TValidator : class, IValidator<TEntity>
        where TRepository : class, IGenericRepository<TEntity, TKey>
    {
        #region IGenericService Members

        Task<TEntity> Get(TKey id);

        Task<IEnumerable<TEntity>> GetAll();

        Task Create(TEntity entity);
        Task Update(TEntity entity);

        Task Delete(TKey id);
        Task Delete(TEntity entity);

        Task<int> Count(Expression<Func<TEntity, bool>> predicate = null);

        #endregion
    }
}
