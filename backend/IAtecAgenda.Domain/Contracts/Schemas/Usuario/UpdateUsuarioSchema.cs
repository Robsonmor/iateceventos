using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Usuario
{
    /// <summary>
    /// Objeto que contém a definição de dados do Usuario
    /// </summary>
    public sealed class UpdateUsuarioSchema : ISchema
    {
        #region Public Properties
        /// <summary>
        /// Id
        /// </summary>       
        [JsonProperty("id")]
        public string Id { get; set; }
        /// <summary>
        /// Status
        /// </summary>    
        [JsonProperty("statusId")]
        public int StatusId { get; set; }
        #endregion
    }
}
