using System;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using IAtecAgenda.Domain.Entities;
using Microsoft.EntityFrameworkCore.Query;
using IAtecAgenda.Domain.Interfaces.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Core.Data.Repositories
{
    public abstract class GenericRepository<TEntity, TKey> : IGenericRepository<TEntity, TKey>
        where TEntity : class, IBaseEntity
    {
        #region Protected Read-Only Fields

        protected readonly ILogger _logger;
        protected readonly EFContext _dbContext;

        #endregion

        #region Constructors

        protected GenericRepository(EFContext dbContext, ILogger logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        #endregion

        #region IGenericRepository Members

        public virtual async Task<TEntity> Get(TKey id)
        {
            return await _dbContext.Set<TEntity>()
                .FindAsync(id);
        }

        public virtual async Task<IEnumerable<TEntity>> GetAll(Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
                                                               Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
                                                               bool disableTracking = true)
        {
            var query = _dbContext.Set<TEntity>()
                .AsQueryable();

            if (disableTracking)
                query = query.AsNoTracking();

            if (include != null)
                query = include(query);

            if (orderBy != null)
                return await orderBy(query).ToListAsync();

            return await query.ToListAsync();
        }

        public virtual async Task<TEntity> Find(Expression<Func<TEntity, bool>> predicate = null,
                                                Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
                                                Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null
        )
        {
            var query = _dbContext.Set<TEntity>()
                .AsQueryable();

            if (include != null)
                query = include(query);

            if (predicate != null)
                query = query.Where(predicate);

            if (orderBy != null)
                return await orderBy(query).FirstOrDefaultAsync();

            return await query.FirstOrDefaultAsync();
        }

        public virtual async Task<IEnumerable<TEntity>> FindAll(Expression<Func<TEntity, bool>> predicate,
                                                                Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
                                                                Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
                                                                bool disableTracking = true
        )
        {
            var query = _dbContext.Set<TEntity>()
                .AsQueryable();

            if (disableTracking)
                query = query.AsNoTracking();

            if (include != null)
                query = include(query);

            if (predicate != null)
                query = query.Where(predicate);

            if (orderBy != null)
                return await orderBy(query).ToListAsync();

            return await query.ToListAsync();
        }

        public virtual async Task<PagedListEntity<TEntity>> PagedList(int pageIndex, int pageSize,
                                   Expression<Func<TEntity, bool>> predicate = null,
                                   Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
                                   Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null,
                                   bool disableTracking = true)
        {
            var query = _dbContext.Set<TEntity>()
                .AsQueryable();

            if (disableTracking)
                query = query.AsNoTracking();

            if (include != null)
                query = include(query);

            if (predicate != null)
                query = query.Where(predicate);

            var output = new PagedListEntity<TEntity>(pageIndex, pageSize);
            output.Total = await query.CountAsync();

            if (orderBy != null)
                output.Collection = await orderBy(query)
                    .Skip(pageSize * (pageIndex - 1))
                    .Take(pageSize)
                    .ToListAsync();
            else
                output.Collection = await query
                    .Skip(pageSize * (pageIndex - 1))
                    .Take(pageSize)
                    .ToListAsync();

            return output;
        }

        public virtual async Task Create(TEntity entity)
        {
            if (typeof(IManagedEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                ((IManagedEntity<TKey>)entity).DataCadastro = DateTime.Now;
            else if (typeof(ITrackableEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                ((ITrackableEntity<TKey>)entity).DataCadastro = DateTime.Now;

            await _dbContext.Set<TEntity>().AddAsync(entity);
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

            if (existing != null)
            {
                if (typeof(IManagedEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                {
                    ((IManagedEntity<TKey>)entity).CriadoPorId = ((IManagedEntity<TKey>)existing).CriadoPorId;
                    ((IManagedEntity<TKey>)entity).DataCadastro = ((IManagedEntity<TKey>)existing).DataCadastro;
                }
                else if (typeof(ITrackableEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                {
                    ((ITrackableEntity<TKey>)entity).CriadoPorId = ((ITrackableEntity<TKey>)existing).CriadoPorId;
                    ((ITrackableEntity<TKey>)entity).DataCadastro = ((ITrackableEntity<TKey>)existing).DataCadastro;
                    ((ITrackableEntity<TKey>)entity).DataAlteracao = DateTime.Now;
                }

                _dbContext.Entry(existing).CurrentValues.SetValues(entity);
            }
        }

        public virtual async Task Delete(TKey id)
        {            
            var entity = await Get(id);
            if (entity != null) _dbContext.Set<TEntity>().Remove(entity);
        }     

        public virtual async Task Delete(TEntity entity)
        {
            if (entity == null) throw new ArgumentException(nameof(entity));

            var id = default(TKey);
            if (typeof(IManagedEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                id = ((IManagedEntity<TKey>)entity).Id;
            else if (typeof(ITrackableEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                id = ((ITrackableEntity<TKey>)entity).Id;
            else if (typeof(IEntity<TKey>).IsAssignableFrom(typeof(TEntity)))
                id = ((IEntity<TKey>)entity).Id;

            if (id.Equals(default(TKey)))
                _dbContext.Set<TEntity>().Remove(entity);
            else
                await Delete(id);
        }

        public virtual async Task<int> Count(Expression<Func<TEntity, bool>> predicate = null)
        {
            var query = _dbContext.Set<TEntity>()
                .AsQueryable();

            if (predicate != null)
                query = query.Where(predicate);

            return await query.CountAsync(); 
        }

        public virtual async Task<TKey> Min(Expression<Func<TEntity, TKey>> selector, Expression<Func<TEntity, bool>> predicate = null)
        {
            var query = _dbContext.Set<TEntity>()
                .AsQueryable();

            if (predicate != null)
                query = query.Where(predicate);

            return await query.MinAsync(selector);
        }

        public virtual async Task<TKey> Max(Expression<Func<TEntity, TKey>> selector, Expression<Func<TEntity, bool>> predicate = null)
        {
            var query = _dbContext.Set<TEntity>()
                .AsQueryable();

            if (predicate != null)
                query = query.Where(predicate);

            return await query.MaxAsync(selector);
        }

        #endregion
    }
}
