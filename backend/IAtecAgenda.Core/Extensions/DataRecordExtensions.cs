using System;
using System.Data;
using System.Globalization;
using System.Reflection;

namespace IAtecAgenda.Core.Extensions
{
    /// <summary>
    /// Provides additional helper methods to the IDataRecord interface.
    /// </summary>
    public static class DataRecordExtensions
    {
        #region GetBoolean

        /// <summary>
        /// Gets the value of the specified column as a Boolean.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column.</returns>
        public static bool GetBoolean(this IDataRecord record, string name)
        {
            if (record == null)
            {
                throw new ArgumentNullException("record");
            }
            return Get(record, record.GetBoolean, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a Boolean -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static bool? GetNullableBoolean(this IDataRecord record, int i)
        {
            if (record == null)
            {
                throw new ArgumentNullException("record");
            }
            return GetNullable(record, record.GetBoolean, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a Boolean -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static bool? GetNullableBoolean(this IDataRecord record, string name)
        {
            if (record == null)
            {
                throw new ArgumentNullException("record");
            }
            return GetNullable(record, record.GetBoolean, name, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a Boolean -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static bool? GetNullableBoolean(this IDataRecord record, int i, bool? defaultValue)
        {
            if (record == null)
            {
                throw new ArgumentNullException("record");
            }
            return GetNullable(record, record.GetBoolean, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a Boolean -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static bool? GetNullableBoolean(this IDataRecord record, string name, bool? defaultValue)
        {
            if (record == null)
            {
                throw new ArgumentNullException("record");
            }
            return GetNullable(record, record.GetBoolean, name, defaultValue);
        }

        /// <summary>
        /// Tries to get the value of the column as a Boolean and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a Boolean; otherwise, false.</returns>
        public static bool TryGetBoolean(this IDataRecord record, int i, out bool value)
        {
            if (record == null)
            {
                throw new ArgumentNullException("record");
            }
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a Boolean and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a Boolean; otherwise, false.</returns>
        public static bool TryGetBoolean(this IDataRecord record, string name, out bool value)
        {
            if (record == null)
            {
                throw new ArgumentNullException("record");
            }
            return TryGet(record, name, out value);
        }

        #endregion

        #region GetEnum

        /// <summary>
        /// Maps the value of the column to the specified enumeration value.
        /// </summary>
        /// <typeparam name="T">The type of the column.</typeparam>
        /// <typeparam name="TEnum">The type of the value to map to.</typeparam>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column mapped to the enumeration value.</returns>
        /// <remarks>This method attempts to generate the enumeration by its name (case-insensitive) or numeric value.</remarks>
        public static TEnum GetEnum<T, TEnum>(this IDataRecord record, int i)
            where TEnum : struct
        {
            return getEnum<T, TEnum>(record, i, getByRepresentation<T, TEnum>);
        }

        /// <summary>
        /// Maps the value of the column to the specified enumeration value.
        /// </summary>
        /// <typeparam name="T">The type of the column.</typeparam>
        /// <typeparam name="TEnum">The type of the value to map to.</typeparam>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column mapped to the enumeration value.</returns>
        /// <remarks>This method attempts to generate the enumeration by its name (case-insensitive) or numeric value.</remarks>
        public static TEnum GetEnum<T, TEnum>(this IDataRecord record, string name)
            where TEnum : struct
        {
            int ordinal = record.GetOrdinal(name);
            return getEnum<T, TEnum>(record, ordinal, getByRepresentation<T, TEnum>);
        }

        private static TEnum getByRepresentation<T, TEnum>(T value)
            where TEnum : struct
        {
            if (value is String)
            {
                return (TEnum)Enum.Parse(typeof(TEnum), (string)(object)value, true);
            }
            return (TEnum)Enum.ToObject(typeof(TEnum), value);
        }

        /// <summary>
        /// Maps the value of the column to an enumeration value.
        /// </summary>
        /// <typeparam name="T">The type of the column.</typeparam>
        /// <typeparam name="TEnum">The type of value to map to.</typeparam>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="mapper">A method that maps from the column's type to the desired type.</param>
        /// <returns>The value of the column mapped to the enumeration value.</returns>
        public static TEnum GetEnum<T, TEnum>(this IDataRecord record, int i, Func<T, TEnum> mapper)
            where TEnum : struct
        {
            return getEnum<T, TEnum>(record, i, mapper);
        }

        /// <summary>
        /// Maps the value of the column to an enumeration value.
        /// </summary>
        /// <typeparam name="T">The type of the column.</typeparam>
        /// <typeparam name="TEnum">The type of value to map to.</typeparam>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="mapper">A method that maps from the column's type to the desired type.</param>
        /// <returns>The value of the column mapped to the enumeration value.</returns>
        public static TEnum GetEnum<T, TEnum>(this IDataRecord record, string name, Func<T, TEnum> mapper)
            where TEnum : struct
        {
            int ordinal = record.GetOrdinal(name);
            return getEnum(record, ordinal, mapper);
        }

        private static TEnum getEnum<T, TEnum>(IDataRecord record, int i, Func<T, TEnum> mapper)
            where TEnum : struct
        {
            T value = getValue<T>(record, i, CultureInfo.CurrentCulture);
            return mapper(value);
        }

        #endregion

        #region GetByte

        /// <summary>
        /// Gets the 8-bit unsigned integer value of the specified column.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The 8-bit unsigned integer value of the specified column.</returns>
        public static byte GetByte(this IDataRecord record, string name)
        {
            return Get(record, record.GetByte, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a byte -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static byte? GetNullableByte(this IDataRecord record, int i)
        {
            return GetNullable(record, record.GetByte, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a byte -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static byte? GetNullableByte(this IDataRecord record, string name)
        {
            return GetNullable(record, record.GetByte, name, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a byte -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static byte? GetNullableByte(this IDataRecord record, int i, byte? defaultValue)
        {
            return GetNullable(record, record.GetByte, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a byte -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static byte? GetNullableByte(this IDataRecord record, string name, byte? defaultValue)
        {
            int ordinal = record.GetOrdinal(name);
            return GetNullable(record, record.GetByte, ordinal, defaultValue);
        }

        /// <summary>
        /// Tries to get the value of the column as a byte and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a byte; otherwise, false.</returns>
        public static bool TryGetByte(this IDataRecord record, int i, out byte value)
        {
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a byte and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a byte; otherwise, false.</returns>
        public static bool TryGetByte(this IDataRecord record, string name, out byte value)
        {
            int ordinal = record.GetOrdinal(name);
            return TryGet(record, ordinal, out value);
        }

        #endregion

        #region GetBytes

        /// <summary>
        /// Reads a stream of bytes from the specified column offset into the buffer
        /// as an array, starting at the given buffer offset.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="fieldOffset">The index within the field from which to start the read operation.</param>
        /// <param name="buffer">The buffer into which to read the stream of bytes.</param>
        /// <param name="bufferoffset">The index for buffer to start the read operation.</param>
        /// <param name="length">The number of bytes to read.</param>
        /// <returns>The actual number of bytes read.</returns>
        public static long GetBytes(this IDataRecord record, string name, long fieldOffset, byte[] buffer, int bufferoffset, int length)
        {
            int ordinal = record.GetOrdinal(name);
            return record.GetBytes(ordinal, fieldOffset, buffer, bufferoffset, length);
        }

        #endregion

        #region GetChar

        /// <summary>
        /// Gets the character value of the specified column.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The character value of the specified column.</returns>
        public static char GetChar(this IDataRecord record, string name)
        {
            return Get(record, record.GetChar, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a char -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static char? GetNullableChar(this IDataRecord record, int i)
        {
            return GetNullable(record, record.GetChar, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a char -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static char? GetNullableChar(this IDataRecord record, string name)
        {
            return GetNullable(record, record.GetChar, name, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a char -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static char? GetNullableChar(this IDataRecord record, int i, char? defaultValue)
        {
            return GetNullable(record, record.GetChar, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a char -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static char? GetNullableChar(this IDataRecord record, string name, char? defaultValue)
        {
            return GetNullable(record, record.GetChar, name, defaultValue);
        }

        /// <summary>
        /// Tries to get the value of the column as a char and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a char; otherwise, false.</returns>
        public static bool TryGetChar(this IDataRecord record, int i, out char value)
        {
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a char and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a char; otherwise, false.</returns>
        public static bool TryGetChar(this IDataRecord record, string name, out char value)
        {
            return TryGet(record, name, out value);
        }

        #endregion

        #region GetChars

        /// <summary>
        /// Reads a stream of characters from the specified column offset into the buffer
        /// as an array, starting at the given buffer offset.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="fieldoffset">The index within the row from which to start the read operation.</param>
        /// <param name="buffer">The buffer into which to read the stream of bytes.</param>
        /// <param name="bufferoffset">The index for buffer to start the read operation.</param>
        /// <param name="length">The number of bytes to read.</param>
        /// <returns>The actual number of characters read.</returns>
        public static long GetChars(this IDataRecord record, string name, long fieldoffset, char[] buffer, int bufferoffset, int length)
        {
            int ordinal = record.GetOrdinal(name);
            return record.GetChars(ordinal, fieldoffset, buffer, bufferoffset, length);
        }

        #endregion

        #region GetData

        /// <summary>
        /// Returns an System.Data.IDataReader for the specified column name.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>An System.Data.IDataReader.</returns>
        public static IDataReader GetData(this IDataRecord record, string name)
        {
            return Get(record, record.GetData, name);
        }

        #endregion

        #region GetDataTypeName

        /// <summary>
        /// Gets the data type information for the specified field.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The data type information for the specified field.</returns>
        public static string GetDataTypeName(this IDataRecord record, string name)
        {
            return Get(record, record.GetDataTypeName, name);
        }

        #endregion

        #region GetDateTime

        /// <summary>
        /// Gets the DateTime value of the specified column.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The DateTime value of the specified column.</returns>
        public static DateTime GetDateTime(this IDataRecord record, string name)
        {
            return Get(record, record.GetDateTime, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a DateTime -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static DateTime? GetNullableDateTime(this IDataRecord record, int i)
        {
            return GetNullable(record, record.GetDateTime, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a DateTime -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static DateTime? GetNullableDateTime(this IDataRecord record, string name)
        {
            return GetNullable(record, record.GetDateTime, name, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a DateTime -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static DateTime? GetNullableDateTime(this IDataRecord record, int i, DateTime? defaultValue)
        {
            return GetNullable(record, record.GetDateTime, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a DateTime -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static DateTime? GetNullableDateTime(this IDataRecord record, string name, DateTime? defaultValue)
        {
            return GetNullable(record, record.GetDateTime, name, defaultValue);
        }

        /// <summary>
        /// Tries to get the value of the column as a DateTime and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a DateTime; otherwise, false.</returns>
        public static bool TryGetDateTime(this IDataRecord record, int i, out DateTime value)
        {
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a DateTime and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a DateTime; otherwise, false.</returns>
        public static bool TryGetDateTime(this IDataRecord record, string name, out DateTime value)
        {
            return TryGet(record, name, out value);
        }

        public static bool IsValidDateSQL(this DateTime record)
        {
            DateTime rngMin = (DateTime)System.Data.SqlTypes.SqlDateTime.MinValue;

            DateTime rngMax = (DateTime)System.Data.SqlTypes.SqlDateTime.MaxValue;

            if ((record < rngMin) || (record > rngMax))
                return false;
            else
                return true;
        }

        #endregion

        #region GetDecimal

        /// <summary>
        /// Gets the decimal value of the specified column.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The decimal value of the specified column.</returns>
        public static decimal GetDecimal(this IDataRecord record, string name)
        {
            return Get(record, record.GetDecimal, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a decimal -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static decimal? GetNullableDecimal(this IDataRecord record, int i)
        {
            return GetNullable(record, record.GetDecimal, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a decimal -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static decimal? GetNullableDecimal(this IDataRecord record, string name)
        {
            return GetNullable(record, record.GetDecimal, name, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a decimal -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static decimal? GetNullableDecimal(this IDataRecord record, int i, decimal? defaultValue)
        {
            return GetNullable(record, record.GetDecimal, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a decimal -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static decimal? GetNullableDecimal(this IDataRecord record, string name, decimal? defaultValue)
        {
            return GetNullable(record, record.GetDecimal, name, defaultValue);
        }

        /// <summary>
        /// Tries to get the value of the column as a decimal and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a decimal; otherwise, false.</returns>
        public static bool TryGetDecimal(this IDataRecord record, int i, out decimal value)
        {
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a decimal and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a decimal; otherwise, false.</returns>
        public static bool TryGetDecimal(this IDataRecord record, string name, out decimal value)
        {
            return TryGet(record, name, out value);
        }

        #endregion

        #region GetDouble

        /// <summary>
        /// Gets the double value of the specified column.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The double value of the specified column.</returns>
        public static double GetDouble(this IDataRecord record, string name)
        {
            return Get(record, record.GetDouble, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a double -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static double? GetNullableDouble(this IDataRecord record, int i)
        {
            return GetNullable(record, record.GetDouble, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a double -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static double? GetNullableDouble(this IDataRecord record, string name)
        {
            return GetNullable(record, record.GetDouble, name, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a double -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static double? GetNullableDouble(this IDataRecord record, int i, double? defaultValue)
        {
            return GetNullable(record, record.GetDouble, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a double -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static double? GetNullableDouble(this IDataRecord record, string name, double? defaultValue)
        {
            return GetNullable(record, record.GetDouble, name, defaultValue);
        }

        /// <summary>
        /// Tries to get the value of the column as a double and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a double; otherwise, false.</returns>
        public static bool TryGetDouble(this IDataRecord record, int i, out double value)
        {
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a double and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a double; otherwise, false.</returns>
        public static bool TryGetDouble(this IDataRecord record, string name, out double value)
        {
            return TryGet(record, name, out value);
        }

        #endregion

        #region GetFieldType

        /// <summary>
        /// Gets the System.Type information corresponding to the type of System.Object
        /// that would be returned from System.Data.IDataRecord.GetValue(System.Int32).
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the field to find.</param>
        /// <returns>
        /// The System.Type information corresponding to the type of System.Object that
        /// would be returned from System.Data.IDataRecord.GetValue(System.Int32).
        /// </returns>
        public static Type GetFieldType(this IDataRecord record, string name)
        {
            return Get(record, record.GetFieldType, name);
        }

        #endregion

        #region GetFloat

        /// <summary>
        /// Gets the float value of the specified column.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The float value of the specified column.</returns>
        public static float GetFloat(this IDataRecord record, string name)
        {
            return Get(record, record.GetFloat, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a float -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static float? GetNullableFloat(this IDataRecord record, int i)
        {
            return GetNullable(record, record.GetFloat, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a float -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static float? GetNullableFloat(this IDataRecord record, string name)
        {
            return GetNullable(record, record.GetFloat, name, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a float -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static float? GetNullableFloat(this IDataRecord record, int i, float? defaultValue)
        {
            return GetNullable(record, record.GetFloat, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a float -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static float? GetNullableFloat(this IDataRecord record, string name, float? defaultValue)
        {
            return GetNullable(record, record.GetFloat, name, defaultValue);
        }

        /// <summary>
        /// Tries to get the value of the column as a float and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a float; otherwise, false.</returns>
        public static bool TryGetFloat(this IDataRecord record, int i, out float value)
        {
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a float and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a float; otherwise, false.</returns>
        public static bool TryGetFloat(this IDataRecord record, string name, out float value)
        {
            return TryGet(record, name, out value);
        }

        #endregion

        #region GetGuid

        /// <summary>
        /// Gets the Guid value of the specified column.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The Guid value of the specified column.</returns>
        public static Guid GetGuid(this IDataRecord record, string name)
        {
            return Get(record, record.GetGuid, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a Guid -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static Guid? GetNullableGuid(this IDataRecord record, int i)
        {
            return GetNullable(record, record.GetGuid, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a Guid -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static Guid? GetNullableGuid(this IDataRecord record, string name)
        {
            return GetNullable(record, record.GetGuid, name, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a Guid -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static Guid? GetNullableGuid(this IDataRecord record, int i, Guid? defaultValue)
        {
            return GetNullable(record, record.GetGuid, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a Guid -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static Guid? GetNullableGuid(this IDataRecord record, string name, Guid? defaultValue)
        {
            return GetNullable(record, record.GetGuid, name, defaultValue);
        }

        /// <summary>
        /// Tries to get the value of the column as a Guid and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a Guid; otherwise, false.</returns>
        public static bool TryGetGuid(this IDataRecord record, int i, out Guid value)
        {
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a Guid and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a Guid; otherwise, false.</returns>
        public static bool TryGetGuid(this IDataRecord record, string name, out Guid value)
        {
            return TryGet(record, name, out value);
        }

        #endregion

        #region GetInt16

        /// <summary>
        /// Gets the short value of the specified column.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The short value of the specified column.</returns>
        public static short GetInt16(this IDataRecord record, string name)
        {
            return Get(record, record.GetInt16, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a short -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static short? GetNullableInt16(this IDataRecord record, int i)
        {
            return GetNullable(record, record.GetInt16, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a short -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static short? GetNullableInt16(this IDataRecord record, string name)
        {
            return GetNullable(record, record.GetInt16, name, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a short -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static short? GetNullableInt16(this IDataRecord record, int i, short? defaultValue)
        {
            return GetNullable(record, record.GetInt16, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a short -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static short? GetNullableInt16(this IDataRecord record, string name, short? defaultValue)
        {
            return GetNullable(record, record.GetInt16, name, defaultValue);
        }

        /// <summary>
        /// Tries to get the value of the column as a short and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a short; otherwise, false.</returns>
        public static bool TryGetInt16(this IDataRecord record, int i, out short value)
        {
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a short and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a short; otherwise, false.</returns>
        public static bool TryGetInt16(this IDataRecord record, string name, out short value)
        {
            return TryGet(record, name, out value);
        }

        #endregion

        #region GetInt32

        /// <summary>
        /// Gets the int value of the specified column.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The int value of the specified column.</returns>
        public static int GetInt32(this IDataRecord record, string name)
        {
            return Get(record, record.GetInt32, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a int -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static int? GetNullableInt32(this IDataRecord record, int i)
        {
            return GetNullable(record, record.GetInt32, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a int -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static int? GetNullableInt32(this IDataRecord record, string name)
        {
            return GetNullable(record, record.GetInt32, name, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a int -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static int? GetNullableInt32(this IDataRecord record, int i, int? defaultValue)
        {
            return GetNullable(record, record.GetInt32, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a int -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static int? GetNullableInt32(this IDataRecord record, string name, int? defaultValue)
        {
            return GetNullable(record, record.GetInt32, name, defaultValue);
        }

        /// <summary>
        /// Tries to get the value of the column as a int and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a int; otherwise, false.</returns>
        public static bool TryGetInt32(this IDataRecord record, int i, out int value)
        {
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a int and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a int; otherwise, false.</returns>
        public static bool TryGetInt32(this IDataRecord record, string name, out int value)
        {
            return TryGet(record, name, out value);
        }

        #endregion

        #region GetInt64

        /// <summary>
        /// Gets the long value of the specified column.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The int value of the specified column.</returns>
        public static long GetInt64(this IDataRecord record, string name)
        {
            return Get(record, record.GetInt64, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a long -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static long? GetNullableInt64(this IDataRecord record, int i)
        {
            return GetNullable(record, record.GetInt64, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a long -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static long? GetNullableInt64(this IDataRecord record, string name)
        {
            return GetNullable(record, record.GetInt64, name, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a long -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static long? GetNullableInt64(this IDataRecord record, int i, long? defaultValue)
        {
            return GetNullable(record, record.GetInt64, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a long -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static long? GetNullableInt64(this IDataRecord record, string name, long? defaultValue)
        {
            return GetNullable(record, record.GetInt64, name, defaultValue);
        }

        /// <summary>
        /// Tries to get the value of the column as a long and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a long; otherwise, false.</returns>
        public static bool TryGetInt64(this IDataRecord record, int i, out long value)
        {
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a long and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a long; otherwise, false.</returns>
        public static bool TryGetInt64(this IDataRecord record, string name, out long value)
        {
            return TryGet(record, name, out value);
        }

        #endregion

        #region GetString

        /// <summary>
        /// Gets the string value of the specified column.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The int value of the specified column.</returns>
        public static string GetString(this IDataRecord record, string name)
        {
            return Get(record, record.GetString, name);
        }

        /// <summary>
        /// Gets the value of the specified column as a string -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static string GetNullableString(this IDataRecord record, int i)
        {
            return getNullableString(record, i, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a string -or- null if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <returns>The value of the column -or- null if the column is null.</returns>
        public static string GetNullableString(this IDataRecord record, string name)
        {
            int ordinal = record.GetOrdinal(name);
            return getNullableString(record, ordinal, null);
        }

        /// <summary>
        /// Gets the value of the specified column as a string -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static string GetNullableString(this IDataRecord record, int i, string defaultValue)
        {
            return getNullableString(record, i, defaultValue);
        }

        /// <summary>
        /// Gets the value of the specified column as a string -or- the specified default value if the column is null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="defaultValue">The default value to use if the column is null.</param>
        /// <returns>The value of the column -or- the default value if the column is null.</returns>
        public static string GetNullableString(this IDataRecord record, string name, string defaultValue)
        {
            int ordinal = record.GetOrdinal(name);
            return getNullableString(record, ordinal, defaultValue);
        }

        private static string getNullableString(IDataRecord record, int i, string defaultValue)
        {
            if (record.IsDBNull(i))
            {
                return defaultValue;
            }
            return record.GetString(i);
        }

        /// <summary>
        /// Tries to get the value of the column as a string and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The zero-based column ordinal.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a string; otherwise, false.</returns>
        public static bool TryGetString(this IDataRecord record, int i, out string value)
        {
            return TryGet(record, i, out value);
        }

        /// <summary>
        /// Tries to get the value of the column as a string and stores it in the out parameter.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the column to find.</param>
        /// <param name="value">The parameter to store the column value in.</param>
        /// <returns>True if the column was a string; otherwise, false.</returns>
        public static bool TryGetString(this IDataRecord record, string name, out string value)
        {
            return TryGet(record, name, out value);
        }

        #endregion

        #region GetValue

        /// <summary>
        /// Return the value of the specified field.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the field to find.</param>
        /// <returns>The System.Object which will contain the field value upon return.</returns>
        public static object GetValue(this IDataRecord record, string name)
        {
            return Get(record, record.GetValue, name);
        }

        /// <summary>
        /// Returns the value of the specified field.
        /// </summary>
        /// <typeparam name="T">The type of the field.</typeparam>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The index of the field to find.</param>
        /// <returns>The value.</returns>
        public static T GetValue<T>(this IDataRecord record, int i)
        {
            return getValue<T>(record, i, CultureInfo.CurrentCulture);
        }

        /// <summary>
        /// Returns the value of the specified field.
        /// </summary>
        /// <typeparam name="T">The type of the field.</typeparam>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the field to find.</param>
        /// <returns>The value.</returns>
        public static T GetValue<T>(this IDataRecord record, string name)
        {
            int ordinal = record.GetOrdinal(name);
            return getValue<T>(record, ordinal, CultureInfo.CurrentCulture);
        }

        /// <summary>
        /// Returns the value of the specified field.
        /// </summary>
        /// <typeparam name="T">The type of the field.</typeparam>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="i">The index of the field to find.</param>
        /// <param name="provider">A format provider for converting to the desired type.</param>
        /// <returns>The value.</returns>
        public static T GetValue<T>(this IDataRecord record, int i, IFormatProvider provider)
        {
            if (provider == null)
            {
                throw new ArgumentNullException("provider");
            }
            return getValue<T>(record, i, provider);
        }

        /// <summary>
        /// Returns the value of the specified field.
        /// </summary>
        /// <typeparam name="T">The type of the field.</typeparam>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the field to find.</param>
        /// <param name="provider">A format provider for converting to the desired type.</param>
        /// <returns>The value.</returns>
        public static T GetValue<T>(this IDataRecord record, string name, IFormatProvider provider)
        {
            if (provider == null)
            {
                throw new ArgumentNullException("provider");
            }
            int ordinal = record.GetOrdinal(name);
            return getValue<T>(record, ordinal, provider);
        }

        private static T getValue<T>(IDataRecord record, int i, IFormatProvider provider)
        {
            Type type = Nullable.GetUnderlyingType(typeof(T)) ?? typeof(T);
            if (record.IsDBNull(i))
            {
                if (typeof(T).GetTypeInfo().IsValueType && typeof(T) == type)
                {
                    throw new InvalidCastException();
                }
                return default;
            }
            object value = record.GetValue(i);
            if (value is IConvertible)
            {
                value = System.Convert.ChangeType(value, type, provider);
            }
            return (T)value;
        }

        #endregion

        #region GetValues

        /// <summary>
        /// Creates an array of objects with the column values of the current record.
        /// </summary>
        /// <param name="record">The IDataRecord to get the values for.</param>
        /// <returns>An array of objects with the column values of the current record.</returns>
        public static object[] GetValues(this IDataRecord record)
        {
            object[] values = new object[record.FieldCount];
            record.GetValues(values);
            return values;
        }

        #endregion

        #region IsDBNull

        /// <summary>
        /// Return whether the specified field is set to null.
        /// </summary>
        /// <param name="record">The IDataRecord to get the value for.</param>
        /// <param name="name">The name of the field to find.</param>
        /// <returns>true if the specified field is set to null; otherwise, false.</returns>
        public static bool IsDBNull(this IDataRecord record, string name)
        {
            return Get(record, record.IsDBNull, name);
        }

        #endregion

        private static TValue Get<TValue>(IDataRecord record, Func<int, TValue> getter, string name)
        {
            int index = record.GetOrdinal(name);
            return getter(index);
        }

        private static TValue? GetNullable<TValue>(IDataRecord record, Func<int, TValue> getter, int index, TValue? defaultValue)
            where TValue : struct
        {
            if (record.IsDBNull(index))
            {
                return defaultValue;
            }
            else
            {
                return getter(index);
            }
        }

        private static TValue? GetNullable<TValue>(IDataRecord record, Func<int, TValue> getter, string name, TValue? defaultValue)
            where TValue : struct
        {
            int index = record.GetOrdinal(name);
            return GetNullable<TValue>(record, getter, index, defaultValue);
        }

        private static bool TryGet<TValue>(IDataRecord record, int i, out TValue value)
        {
            if (record.IsDBNull(i))
            {
                value = default;
                return false;
            }
            object result = record.GetValue(i);
            if (result is TValue)
            {
                value = (TValue)result;
                return true;
            }
            else
            {
                value = default;
                return false;
            }
        }

        private static bool TryGet<TValue>(IDataRecord record, string name, out TValue value)
        {
            int index = record.GetOrdinal(name);
            return TryGet<TValue>(record, index, out value);
        }
    }
}
