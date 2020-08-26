using System.Collections.Generic;
using IAtecAgenda.Domain.Interfaces.Entities;

namespace IAtecAgenda.Domain.Entities
{
    public sealed class PagedListEntity<TEntity>
        where TEntity : class, IBaseEntity
    {
        #region Public Properties

        public int Total { get; set; }
        public int PageSize { get; set; }
        public int PageIndex { get; set; }
        public IEnumerable<TEntity> Collection { get; set; }

        #endregion

        #region Constructors

        public PagedListEntity(int pageIndex, int pageSize)
            : this(pageIndex, pageSize, total: 0)
        { }

        public PagedListEntity(int pageIndex, int pageSize, int total)
        {
            Total = total;
            PageSize = pageSize;
            PageIndex = pageIndex;
        }

        #endregion
    }
}
