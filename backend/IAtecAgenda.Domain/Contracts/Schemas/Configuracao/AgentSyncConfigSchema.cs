using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Configuracao
{
    public sealed class AgentSyncConfigSchema : BaseSchema
    {
        #region Public Properties

        [JsonProperty("retries")]
        public int Retries { get; set; } = 5;

        [JsonProperty("storageConfig")]
        public StorageConfigSchema StorageConfig { get; set; } = new StorageConfigSchema();

        [JsonProperty("localRepositoryConfig")]
        public LocalRepositoryConfigSchema LocalRepositoryConfig { get; set; } = new LocalRepositoryConfigSchema();

        [JsonProperty("retryErrosHoursConfig")]
        public string RetryErrosHoursConfig { get; set; } = string.Empty;

        #endregion
    }
}
