using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Dashboard
{
    /// <summary>
    /// Objeto que contém as definições da Dashboard
    /// </summary>
    public sealed class DashboardRecebimentoDigitalSchema : BaseSchema
    {
        #region Public Properties
        /// <summary>
        /// EmailRecebido
        /// </summary>
        [JsonProperty("emailRecebido")]
        public int EmailRecebido { get; set; }

        /// <summary>
        /// CargaRecebido
        /// </summary>
        [JsonProperty("cargaRecebido")]
        public int CargaRecebido { get; set; }

        /// <summary>
        /// EmailRecebido
        /// </summary>
        [JsonProperty("emailTriado")]
        public int EmailTriado { get; set; }
        #endregion
    }
}
