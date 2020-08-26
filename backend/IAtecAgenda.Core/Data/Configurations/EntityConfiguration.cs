using IAtecAgenda.Domain.Interfaces.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace IAtecAgenda.Core.Data.Configurations
{
    internal abstract class EntityConfiguration<TEntity>
       where TEntity : class, IBaseEntity
    {
        #region Public Abstract Methods

        public virtual IEnumerable<TEntity> Seed() => new TEntity[] { };
        public abstract void Configure(EntityTypeBuilder<TEntity> builder);

        #endregion
    }
}
