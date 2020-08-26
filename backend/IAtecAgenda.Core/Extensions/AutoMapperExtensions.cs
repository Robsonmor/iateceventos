using AutoMapper;
using System.Collections.Generic;
using IAtecAgenda.Domain.Interfaces.Entities;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using IAtecAgenda.Domain.Interfaces.Contracts.Requests;

namespace IAtecAgenda.Core.Extensions
{
    public static class AutoMapperExtensions
    {
        #region Extension Methods - ConvertEntityToSchema

        public static TSchema ConvertEntityToSchema<TSchema, TEntity>(this TEntity entity)
            where TSchema : class, ISchema
            where TEntity : class, IBaseEntity
        {
            return Mapper.Map<TEntity, TSchema>(entity);
        }

        public static TSchema ConvertEntityToSchema<TSchema>(this IBaseEntity entity)
            where TSchema : class, ISchema
        {
            return (TSchema)Mapper.Map(entity, entity.GetType(), typeof(TSchema));
        }

        public static IEnumerable<TSchema> ConvertEntityToSchema<TSchema, TEntity>(this IEnumerable<TEntity> entity)
            where TSchema : class, ISchema
            where TEntity : class, IBaseEntity
        {
            return Mapper.Map<IEnumerable<TEntity>, IEnumerable<TSchema>>(entity);
        }

        public static IEnumerable<TSchema> ConvertEntityToSchema<TSchema>(this IEnumerable<IBaseEntity> entity)
            where TSchema : class, ISchema
        {
            return (IEnumerable<TSchema>)Mapper.Map(entity, entity.GetType(), typeof(IEnumerable<TSchema>));
        }

        #endregion

        #region Extension Methods - ConvertSchemaToEntity

        public static TEntity ConvertSchemaToEntity<TEntity, TSchema>(this TSchema schema)
            where TSchema : class, ISchema
            where TEntity : class, IBaseEntity
        {
            return Mapper.Map<TSchema, TEntity>(schema);
        }

        public static TEntity ConvertSchemaToEntity<TEntity>(this ISchema schema)
            where TEntity : class, IBaseEntity
        {
            return (TEntity)Mapper.Map(schema, schema.GetType(), typeof(TEntity));
        }

        public static IEnumerable<TEntity> ConvertSchemaToEntity<TEntity, TSchema>(this IEnumerable<TSchema> schema)
            where TSchema : class, ISchema
            where TEntity : class, IBaseEntity
        {
            return Mapper.Map<IEnumerable<TSchema>, IEnumerable<TEntity>>(schema);
        }

        public static IEnumerable<TEntity> ConvertSchemaToEntity<TEntity>(this IEnumerable<ISchema> schema)
            where TEntity : class, IBaseEntity
        {
            return (IEnumerable<TEntity>)Mapper.Map(schema, schema.GetType(), typeof(IEnumerable<TEntity>));
        }

        #endregion

        #region Extension Methods - ConvertRequestToEntity

        public static TEntity ConvertRequestToEntity<TEntity, TRequest>(this TRequest request)
            where TEntity : class, IBaseEntity
            where TRequest : class, IBaseRequest
        {
            return Mapper.Map<TRequest, TEntity>(request);
        }

        public static TEntity ConvertRequestToEntity<TEntity>(this IBaseRequest request)
            where TEntity : class, IBaseEntity
        {
            return (TEntity)Mapper.Map(request, request.GetType(), typeof(TEntity));
        }

        public static IEnumerable<TEntity> ConvertRequestToEntity<TEntity, TRequest>(this IEnumerable<TRequest> request)
            where TEntity : class, IBaseEntity
            where TRequest : class, IBaseRequest
        {
            return Mapper.Map<IEnumerable<TRequest>, IEnumerable<TEntity>>(request);
        }

        public static IEnumerable<TEntity> ConvertRequestToEntity<TEntity>(this IEnumerable<IBaseRequest> request)
            where TEntity : class, IBaseEntity
        {
            return (IEnumerable<TEntity>)Mapper.Map(request, request.GetType(), typeof(IEnumerable<TEntity>));
        }

        #endregion
    }
}
