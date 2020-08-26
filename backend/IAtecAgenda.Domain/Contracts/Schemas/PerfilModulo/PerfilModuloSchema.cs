using Newtonsoft.Json;
using IAtecAgenda.Domain.Contracts.Schemas.Modulo;
using IAtecAgenda.Domain.Contracts.Schemas.Perfil;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;

namespace IAtecAgenda.Domain.Contracts.Schemas.PerfilModulo
{
    /// <summary>
    /// Objeto que contém as definições de relacionament entre módulo e perfil
    /// </summary>
    public sealed class PerfilModuloSchema : ISchema
    {
        #region Public Properties

        /// <summary>
        /// Objeto de referência de um módulo
        /// </summary>
        [JsonProperty("modulo")]
        public ModuloSchema Modulo { get; set; }
        /// <summary>
        /// Objeto de referência de um perfil
        /// </summary>
        [JsonProperty("perfil")]
        public PerfilSchema Perfil { get; set; }

        #endregion
    }
}
