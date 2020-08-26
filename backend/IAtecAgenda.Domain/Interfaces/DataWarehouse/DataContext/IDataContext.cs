using IAtecAgenda.Domain.Interfaces.Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace IAtecAgenda.Domain.Interfaces.DataWarehouse.DataContext
{
    public interface IDataContext
    {
        #region IDataContext Members

        TEntity Command<TEntity>(Func<SqlConnection, SqlTransaction, int, TEntity> command, int commandTimeout = 10000000);

        TEntity CommandNonTrans<TEntity>(Func<SqlConnection, int, TEntity> command, int commandTimeout = 10000000);

        TEntity Get<TEntity>(Func<SqlConnection, SqlTransaction, int, TEntity> command)
            where TEntity : class, IBaseEntity;

        IEnumerable<TEntity> Select<TEntity>(Func<SqlConnection, SqlTransaction, int, IEnumerable<TEntity>> command)
            where TEntity : class, IBaseEntity;

        void Execute(string sql, object parameters);
        void Execute(string sql);

        TEntity Get<TEntity>(string sql, object parameters)
            where TEntity : class, IBaseEntity;

        IEnumerable<TEntity> Select<TEntity>(string sql, object parameters)
            where TEntity : class, IBaseEntity;

        int ExecuteNonQuery(string sql, object parameters);
        int ExecuteNonQuery(string sql);
        IList<object> Query(string sql, object parameters);
        #endregion
    }
}
