using System;
using System.Collections.Generic;

namespace IAtecAgenda.Core.Extensions
{
    public static class DictionaryExtensions
    {
        #region Extension Methods

        public static void ForEach<TKey, TValue>(this Dictionary<TKey, TValue> dict, Action<TKey, TValue> action)
        {
            if (dict == null) throw new ArgumentNullException(nameof(dict));
            if (action == null) throw new ArgumentNullException(nameof(action));

            foreach (KeyValuePair<TKey, TValue> item in dict)
                action(item.Key, item.Value);
        }

        #endregion
    }
}
