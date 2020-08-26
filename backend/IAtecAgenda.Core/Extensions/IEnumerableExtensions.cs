using System;
using System.Linq;
using System.Data;
using System.ComponentModel;
using System.Collections.Generic;
using System.Collections.Concurrent;

namespace IAtecAgenda.Core.Extensions
{
    public static class IEnumerableExtensions
    {
        #region Extension Methods
        public static ConcurrentBag<TObject> ToConcurrentBag<TObject>(this IEnumerable<TObject> source)
            => new ConcurrentBag<TObject>(source);

        public static IEnumerable<(TObject item, int index)> WithIndex<TObject>(this IEnumerable<TObject> self)
            => self.Select((item, index) => (item, index));

        public static void ForEach<TObject>(this IEnumerable<TObject> source, Action<TObject> action)
        {
            foreach (TObject item in source)
                action(item);
        }

        public static void ForEach<TObject>(this IEnumerable<TObject> source, Action<TObject, int> action)
        {
            var index = 0;
            foreach (TObject item in source)
                action(item, index++);
        }

        public static DataTable ToDataTable<T>(this IEnumerable<T> list)
        {
            var entityType = typeof(T);


            if (entityType == typeof(String))
            {
                var dataTable = new DataTable(entityType.Name);
                dataTable.Columns.Add(entityType.Name);

                foreach (T item in list)
                {
                    var row = dataTable.NewRow();
                    row[0] = item;
                    dataTable.Rows.Add(row);
                }

                return dataTable;
            }
            else if (entityType.BaseType == typeof(Enum))
            {
                var dataTable = new DataTable(entityType.Name);
                dataTable.Columns.Add(entityType.Name);

                foreach (string namedConstant in Enum.GetNames(entityType))
                {
                    var row = dataTable.NewRow();
                    row[0] = namedConstant;
                    dataTable.Rows.Add(row);
                }

                return dataTable;
            }

            var underlyingType = Nullable.GetUnderlyingType(entityType);
            var primitiveTypes = new List<Type>
            {
                typeof (Byte),
                typeof (Char),
                typeof (Decimal),
                typeof (Double),
                typeof (Int16),
                typeof (Int32),
                typeof (Int64),
                typeof (SByte),
                typeof (Single),
                typeof (UInt16),
                typeof (UInt32),
                typeof (UInt64),
            };

            var typeIsPrimitive = primitiveTypes.Contains(underlyingType);

            if (typeIsPrimitive)
            {
                var dataTable = new DataTable(underlyingType.Name);
                dataTable.Columns.Add(underlyingType.Name);

                foreach (T item in list)
                {
                    var row = dataTable.NewRow();
                    row[0] = item;
                    dataTable.Rows.Add(row);
                }

                return dataTable;
            }
            else
            {
                var dataTable = new DataTable(entityType.Name);
                var propertyDescriptorCollection = TypeDescriptor.GetProperties(entityType);

                foreach (PropertyDescriptor propertyDescriptor in propertyDescriptorCollection)
                {
                    var propertyType = Nullable.GetUnderlyingType(propertyDescriptor.PropertyType) ?? propertyDescriptor.PropertyType;
                    dataTable.Columns.Add(propertyDescriptor.Name, propertyType);
                }

                foreach (T item in list)
                {
                    var row = dataTable.NewRow();

                    foreach (PropertyDescriptor propertyDescriptor in propertyDescriptorCollection)
                    {
                        var value = propertyDescriptor.GetValue(item);
                        row[propertyDescriptor.Name] = value ?? DBNull.Value;
                    }

                    dataTable.Rows.Add(row);
                }

                return dataTable;
            }
        }

        #endregion
    }
}
