using System;
using System.Linq;
using System.Dynamic;
using System.Reflection;
using System.Linq.Expressions;
using System.Collections.Generic;
using System.Collections.Concurrent;

namespace IAtecAgenda.Core.Extensions
{
    public static class ObjectExtensions
    {
        #region Private Static Read-Only Fields

        private static readonly MethodInfo AddToDicitonaryMethod = typeof(IDictionary<string, object>).GetMethod("Add");
        private static readonly ConstructorInfo DictionaryConstructor = typeof(Dictionary<string, object>).GetConstructors().FirstOrDefault(c => c.IsPublic && !c.GetParameters().Any());
        private static readonly ConcurrentDictionary<Type, Func<object, IDictionary<string, object>>> Converters = new ConcurrentDictionary<Type, Func<object, IDictionary<string, object>>>();

        #endregion

        #region Extension Methods

        public static dynamic ToObject(this IDictionary<string, string> source)
        {
            var expObject = new ExpandoObject();
            var collection = (ICollection<KeyValuePair<string, object>>)expObject;

            foreach (var item in source)
            {
                var kvp = new KeyValuePair<string, object>(item.Key, item.Value);
                collection.Add(kvp);
            }

            dynamic eoDynamic = expObject;

            return eoDynamic;
        }

        public static T ToObject<T>(this IDictionary<string, object> source)
            where T : class, new()
        {
            var someObject = new T();
            var someObjectType = someObject.GetType();

            foreach (var item in source)
            {
                someObjectType
                         .GetProperty(item.Key)
                         .SetValue(someObject, item.Value, null);
            }

            return someObject;
        }

        public static IDictionary<string, object> AsDictionary(this object source, BindingFlags bindingAttr = BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.Instance)
        {
            return source.GetType().GetProperties(bindingAttr).ToDictionary
            (
                propInfo => propInfo.Name,
                propInfo => propInfo.GetValue(source, null)
            );

        }

        public static IDictionary<string, object> ToDictionary(this object obj) => obj == null ? null : Converters.GetOrAdd(obj.GetType(), o =>
        {
            var outputType = typeof(IDictionary<string, object>);
            var inputType = obj.GetType();
            var inputExpression = Expression.Parameter(typeof(object), "input");
            var typedInputExpression = Expression.Convert(inputExpression, inputType);
            var outputVariable = Expression.Variable(outputType, "output");
            var returnTarget = Expression.Label(outputType);

            var body = new List<Expression>
            {
                Expression.Assign(outputVariable, Expression.New(DictionaryConstructor))
            };

            body.AddRange(
                from prop in inputType.GetProperties(BindingFlags.Instance | BindingFlags.Public | BindingFlags.FlattenHierarchy)
                where prop.CanRead && (prop.PropertyType.IsPrimitive || prop.PropertyType == typeof(string))
                let getExpression = Expression.Property(typedInputExpression, prop.GetMethod)
                select Expression.Call(outputVariable, AddToDicitonaryMethod, Expression.Constant(prop.Name), getExpression)
            );

            body.Add(Expression.Return(returnTarget, outputVariable));
            body.Add(Expression.Label(returnTarget, Expression.Constant(null, outputType)));

            var lambdaExpression = Expression.Lambda<Func<object, IDictionary<string, object>>>(
                Expression.Block(new[] { outputVariable }, body),
                inputExpression);

            return lambdaExpression.Compile();
        })(obj);

        #endregion
    }
}
