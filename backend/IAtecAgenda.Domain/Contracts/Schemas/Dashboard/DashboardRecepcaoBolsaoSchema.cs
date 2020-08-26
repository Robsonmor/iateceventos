using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Dashboard
{
    /// <summary>
    /// Objeto que contém as definições da Dashboard
    /// </summary>
    public sealed class DashboardRecepcaoBolsaoSchema : BaseSchema
    {
        #region Public Properties
        /// <summary>
        /// BolsaoRecebido
        /// </summary>
        [JsonProperty("bolsaoRecebido")]
        public int BolsaoRecebido { get; set; }

        /// <summary>
        /// BolsaoRecebido
        /// </summary>
        [JsonProperty("kit")]
        public int Kit { get; set; }
        #endregion
    }
}
