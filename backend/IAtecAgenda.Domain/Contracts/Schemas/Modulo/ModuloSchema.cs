using Newtonsoft.Json;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;

namespace IAtecAgenda.Domain.Contracts.Schemas.Modulo
{
    /// <summary>
    /// Objeto que contém as definições do módulo do sistema
    /// </summary>
    public sealed class ModuloSchema : ISchema
    {
        #region Public Properties

        /// <summary>
        /// Código identificador do módulo
        /// </summary>
        [JsonProperty("moduloId")]
        public int ModuloId { get; set; }

        /// <summary>
        /// Nome do módulo
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }

        #endregion
    }
}
