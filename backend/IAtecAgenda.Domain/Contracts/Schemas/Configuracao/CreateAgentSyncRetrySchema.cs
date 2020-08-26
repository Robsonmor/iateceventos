using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Configuracao
{
    public sealed class CreateAgentSyncRetrySchema : BaseSchema
    {
        #region Public Properties

        [JsonProperty("hostname")]
        public string Hostname { get; set; }

        #endregion
    }
}
