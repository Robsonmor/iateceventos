using System;
using FluentValidation;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using IAtecAgenda.Domain.Interfaces.Entities;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Core.Business.Services
{
    public abstract class GenericService<TEntity, TKey, TValidator, TRepository> : IGenericService<TEntity, TKey, TValidator, TRepository>
        where TEntity : class, IBaseEntity
        where TValidator : class, IValidator<TEntity>
        where TRepository : class, IGenericRepository<TEntity, TKey>
    {
        #region Protected Read-Only Fields

        protected readonly ILogger _logger;
        protected readonly TValidator _validator;
        protected readonly TRepository _repository;

        #endregion

        #region Constructors

        protected GenericService(ILogger logger, TValidator validator, TRepository repository)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _validator = validator ?? throw new ArgumentNullException(nameof(validator));
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        #endregion

        #region IGenericService Members

        public virtual async Task<TEntity> Get(TKey id)
        {
            return await _repository.Get(id);
        }

        public virtual async Task<IEnumerable<TEntity>> GetAll()
        {
            return await _repository.GetAll();
        }

        public virtual async Task Create(TEntity entity)
        {
            await _validator.ValidateAndThrowAsync(entity);
            await _repository.Create(entity);
        }

        public virtual async Task Update(TEntity entity)
        {
            TKey id;
            if (typeof(IManagedEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                id = ((IManagedEntity<TKey>)entity).Id;
            else if (typeof(ITrackableEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                id = ((ITrackableEntity<TKey>)entity).Id;
            else if (typeof(IEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                id = ((IEntity<TKey>)entity).Id;
            else
                throw new InvalidCastException();

            var existing = await Get(id);
            if (existing == null)
                throw new ArgumentException(nameof(existing));

            await _validator.ValidateAndThrowAsync(entity);
            await _repository.Update(entity);
        }

        public virtual async Task Delete(TKey id)
        {
            var entity = await Get(id);
            if (entity == null)
                throw new ArgumentException(nameof(entity));

            await _repository.Delete(id);
        }

        public virtual async Task Delete(TEntity entity)
        {
            ValidateDelete(entity);

            var id = default(TKey);
            if (typeof(IManagedEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                id = ((IManagedEntity<TKey>)entity).Id;
            else if (typeof(ITrackableEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                id = ((ITrackableEntity<TKey>)entity).Id;
            else if (typeof(IEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                id = ((IEntity<TKey>)entity).Id;

            if (id.Equals(default(TKey)))
                await _repository.Delete(entity);
            else
                await Delete(id);
        }

        public virtual async Task<int> Count(Expression<Func<TEntity, bool>> predicate = null)
        {
            return await _repository.Count(predicate);
        }

        #endregion

        #region Private Methods

        private void ValidateDelete(TEntity entity)
        {
            if (entity == null) throw new ArgumentException(nameof(entity));
        }

        #endregion
    }
}
