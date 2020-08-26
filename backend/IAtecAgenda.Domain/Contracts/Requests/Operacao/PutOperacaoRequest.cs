using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace IAtecAgenda.Domain.Contracts.Requests.Operacao
{
    /// <summary>
    /// Objeto que contém a definição de dados de uma operação
    /// </summary>
    public sealed class PutOperacaoRequest : BaseRequest
    {
        #region Public Properties

        /// <summary>
        /// Nome operação
        /// </summary>
        [Required, JsonProperty("nome")]
        public string Nome { get; set; }

        /// <summary>
        /// Código identificador do grupo de operação
        /// </summary>
        [JsonProperty("operacaoGrupoId")]
        public int OperacaoGrupoId { get; set; }

        #endregion
    }
}
