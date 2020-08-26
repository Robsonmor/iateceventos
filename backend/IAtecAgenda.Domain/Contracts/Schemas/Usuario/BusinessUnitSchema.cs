using Newtonsoft.Json;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;

namespace IAtecAgenda.Domain.Contracts.Schemas.Usuario
{
    public sealed class BusinessUnitSchema : ISchema
    {
        #region Public Properties

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("nome")]
        public string Nome { get; set; }

        [JsonProperty("checked")]
        public bool Checked { get; set; }

        #endregion
    }
}
