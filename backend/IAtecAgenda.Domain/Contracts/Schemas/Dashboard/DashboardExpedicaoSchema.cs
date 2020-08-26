using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Dashboard
{
    /// <summary>
    /// Objeto que contém as definições da Dashboard
    /// </summary>
    public sealed class DashboardExpedicaoSchema : BaseSchema
    {
        #region Public Properties
        /// <summary>
        /// CaixaEnviada
        /// </summary>
        [JsonProperty("caixaEnviada")]
        public int CaixaEnviada { get; set; }

        /// <summary>
        /// KitEmCaixa
        /// </summary>
        [JsonProperty("kitEmCaixa")]
        public int KitEmCaixa { get; set; }

        /// <summary>
        /// KitDevolvido
        /// </summary>
        [JsonProperty("kitDevolvido")]
        public int KitDevolvido { get; set; }
        #endregion
    }
}
