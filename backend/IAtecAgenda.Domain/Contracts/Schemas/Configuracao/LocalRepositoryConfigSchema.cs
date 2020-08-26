using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Configuracao
{
    public sealed class LocalRepositoryConfigSchema : BaseSchema
    {
        #region Public Properties

        [JsonProperty("directory")]
        public string Directory { get; set; }

        [JsonProperty("retriesPath")]
        public string RetriesPath { get; set; }

        [JsonProperty("errorPath")]
        public string ErrorPath { get; set; }

        [JsonProperty("backupPath")]
        public string BackupPath { get; set; }

        [JsonProperty("recursive")]
        public bool Recursive { get; set; }

        [JsonProperty("matchExpression")]
        public string MatchExpression { get; set; }

        [JsonProperty("extesionFrom")]
        public string ExtesionFrom { get; set; }

        [JsonProperty("extesionTo")]
        public string ExtesionTo { get; set; }

        [JsonProperty("convertActive")]
        public bool ConvertActive { get; set; }

        #endregion
    }
}
