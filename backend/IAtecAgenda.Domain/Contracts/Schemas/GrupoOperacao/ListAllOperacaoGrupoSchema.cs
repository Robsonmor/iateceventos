using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.GrupoOperacao
{
    /// <summary>
    /// Objeto que contém as definições do grupo de operações
    /// </summary>
    public sealed class ListAllOperacaoGrupoSchema : BaseSchema
    {
        #region Public Properties

        /// <summary>
        /// Código identificador do grupo
        /// </summary>
        [JsonProperty("operacaoGrupoId")]
        public int OperacaoGrupoId { get; set; }

        /// <summary>
        /// Nome do grupo
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }

        #endregion
    }
}
