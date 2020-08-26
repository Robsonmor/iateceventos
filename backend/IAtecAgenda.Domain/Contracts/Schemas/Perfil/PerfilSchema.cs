using Newtonsoft.Json;
using System.Collections.Generic;
using IAtecAgenda.Domain.Contracts.Schemas.PerfilModulo;

namespace IAtecAgenda.Domain.Contracts.Schemas.Perfil
{
    /// <summary>
    /// Objeto que contém as definição de um perfil de usuário
    /// </summary>
    public sealed class PerfilSchema : BaseSchema
    {
        #region Public Properties
        /// <summary>
        /// Código identificador do perfil de usuário
        /// </summary>
        [JsonProperty("perfilId")]
        public string PerfilId { get; set; }
        /// <summary>
        /// Nome de exibição do perfil de usuário
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }
        /// <summary>
        /// Coleção de módulos autorizados para o perfil
        /// </summary>
        [JsonProperty("modulos")]
        public IEnumerable<PerfilModuloSchema> Modulos { get; set; }
        #endregion
    }
}
