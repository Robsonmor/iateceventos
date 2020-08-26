using System.Data;
using System.Collections.Generic;
using IAtecAgenda.Domain.Interfaces.Entities;
using System;

namespace IAtecAgenda.Domain.Interfaces.DataWarehouse.DataStorage
{
    public interface IGenericDataStorage<TDataSource>
        where TDataSource : class, IBaseEntity
    {
        #region IGenericDataStorage Members
        IEnumerable<TDataSource> Select(string query);
        void Truncate();
        void Add(TDataSource entity, bool ignoreId = false);
        TDataSource FindByID(int id);
        IEnumerable<TDataSource> FindAll(string predicate = null, bool customColumns = false, string[] columns = null);
        void Update(TDataSource entity, string predicate = "WHERE Id = @Id");
        void Remove(TDataSource entity, string predicate = "WHERE Id = @Id");
        void BulkCopy(TDataSource entity, DataTable dataTable, int batchSize = 10000, int timeout = 3000, bool truncate = false, bool registerLog = false);
        void RegisterLog(int totalRows);
        bool Any(string predicate = null, string objectName = null);
        void Execute(string command, int commandTimeout = 10000);
        IEnumerable<TDataSource> Query(string objectName, string[] columns = null, string predicate = null, bool procedure = false);
        TDataSource First(string predicate = null, bool customColumns = false, string[] columns = null);

        string ValidateReject<TFornecedor, TDbm, TEncerramento, TGerenteDigital, TPlataforma, TContasAbertas>(
                                            string entity,
                                            int id,
                                            string uniorgPara,
                                            string agencia,
                                            string numeroConta,
                                            string documento,
                                            string usuario,
                                            string siglaPrefix,
                                            DateTime dataFormalizacao,
                                            string motivoRejeito = null,
                                            int timeout = 30000,
                                            bool validateFornecedor = true,
                                            bool validateDBM = true,
                                            bool validateEncerramento = true,
                                            bool validateProcessoAbertura = true,
                                            bool validatePlataforma = true
                                            );

        string CheckGerenteDigitalE3<TGerenteDigital, TPlataforma>(string siglaPrefix, string documento, string usuario);

         #endregion
    }
}
