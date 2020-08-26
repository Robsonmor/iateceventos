using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Dashboard
{
    /// <summary>
    /// Objeto que contém as definições da Dashboard
    /// </summary>
    public sealed class DashboardRecepcaoMaloteSchema : BaseSchema
    {
        #region Public Properties
        /// <summary>
        /// MaloteEnglobador
        /// </summary>
        [JsonProperty("maloteEnglobador")]
        public int MaloteEnglobador { get; set; }

        /// <summary>
        /// Malote
        /// </summary>
        [JsonProperty("malote")]
        public int Malote { get; set; }

        /// <summary>
        /// Kit
        /// </summary>
        [JsonProperty("kit")]
        public int Kit { get; set; }

        #endregion
    }
}
