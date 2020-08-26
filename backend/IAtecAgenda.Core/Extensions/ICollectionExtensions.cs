using System;
using System.Linq;
using System.Collections.Generic;

namespace IAtecAgenda.Core.Extensions
{
    public static class ICollectionExtensions
    {
        #region Extension Methods

        public static void RemoveAll<TEntity>(this ICollection<TEntity> collection, Func<TEntity, bool> predicate = null)
        {
            for (int idx = 0; idx < collection.Count; idx++)
            {
                var element = collection.ElementAt(idx);

                if (predicate == null || predicate(element))
                {
                    collection.Remove(element);
                    idx--;
                }
            }
        }

        #endregion
    }
}
