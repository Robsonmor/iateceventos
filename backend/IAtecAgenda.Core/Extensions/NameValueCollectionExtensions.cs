using System.Collections.Specialized;

namespace IAtecAgenda.Core.Extensions
{
    public static class NameValueCollectionExtensions
    {
        #region Extension Methods

        public static string GetValue(this NameValueCollection collection, string name, string defaultValue = null)
        {
            return collection[name] ?? defaultValue;
        }

        #endregion
    }
}
