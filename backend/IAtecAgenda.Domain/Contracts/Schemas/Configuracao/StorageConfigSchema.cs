using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Configuracao
{
    public sealed class StorageConfigSchema : BaseSchema
    {
        #region Public Properties

        [JsonProperty("uri")]
        public string Uri { get; set; }

        [JsonProperty("temporaryDirectory")]
        public string TemporaryDirectory { get; set; }

        [JsonProperty("userCredential")]
        public string UserCredential { get; set; }

        [JsonProperty("passCredential")]
        public string PassCredential { get; set; }

        #endregion
    }
}
