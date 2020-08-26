using IAtecAgenda.Domain.Interfaces.DataWarehouse.DataSource;
using IAtecAgenda.Domain.Interfaces.DataWarehouse.DataStorage;
using Hangfire.Server;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Interfaces.DataWarehouse.DataService
{
    public interface IBaseDataService
    {
        #region IBaseDataService Members
 
        void Execute();
        string OutputFile { get; }
        string OutputPath { get; }
        string OutputUrlPath { get; }
        string OutputFileName { get; }
        void ExecuteWithCentralDownloads(string userId, int? atividadeId, Dictionary<string, string> extraParams = null);

        #endregion
    }

    public interface IGenericDataService<TDataSource, TDataExtraction, TDataStorage> : IBaseDataService
        where TDataSource : class, IBaseDataSource
        where TDataStorage : class, IGenericDataStorage<TDataSource>
    {

        #region IGenericDataService Members
        void Register(PerformContext serviceContext);  

        #endregion
    }
}
