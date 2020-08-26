using System;
using System.Globalization;

namespace IAtecAgenda.Core.Helpers
{
    public static class ParserTypeHelper<T>
            where T : struct
    {
        #region Public Static Methods

        public static bool TryParse(string s, out T result)
        {
            bool success = false;
            result = default;

            if (!String.IsNullOrEmpty(s))
            {
#pragma warning disable IDE0019 // Use pattern matching
                IConvertible convertableString = s as IConvertible;
#pragma warning restore IDE0019 // Use pattern matching
                if (convertableString != null)
                {
                    try
                    {
                        result = (T)convertableString.ToType(typeof(T), CultureInfo.CurrentCulture);
                        success = true;
                    }
                    catch (Exception ex)
                    {
                        System.Diagnostics.Debug.Write(ex);
                    }
                }
            }
            return success;
        }

        public static bool TryParse(string s, out Nullable<T> result)
        {
            bool success = false;
            result = new Nullable<T>();
            if (String.IsNullOrEmpty(s))
            {
                success = true;
            }
            else
            {
#pragma warning disable IDE0019 // Use pattern matching
                IConvertible convertableString = s as IConvertible;
#pragma warning restore IDE0019 // Use pattern matching
                if (convertableString != null)
                {
                    try
                    {
                        result = new Nullable<T>((T)convertableString.ToType(typeof(T), CultureInfo.CurrentCulture));
                        success = true;
                    }
                    catch (Exception ex)
                    {
                        System.Diagnostics.Debug.Write(ex);
                    }
                }
            }
            return success;
        }

        public static bool TryParse(string s, out T result, T defaultValue)
        {
            bool success = false;
            result = default;
            if (String.IsNullOrEmpty(s))
            {
                result = defaultValue;
                success = true;
            }
            else
            {
#pragma warning disable IDE0019 // Use pattern matching
                IConvertible convertableString = s as IConvertible;
#pragma warning restore IDE0019 // Use pattern matching
                if (convertableString != null)
                {
                    try
                    {
                        result = (T)convertableString.ToType(typeof(T), CultureInfo.CurrentCulture);
                        success = true;
                    }
                    catch (Exception ex)
                    {
                        System.Diagnostics.Debug.Write(ex);
                    }
                }
            }
            return success;
        }

        #endregion
    }
}
