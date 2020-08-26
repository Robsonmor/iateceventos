using IAtecAgenda.Domain.Enumerations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace IAtecAgenda.Domain.Contracts.Requests.Operacao
{
    /// <summary>
    /// Objeto que contém a definição de dados de uma operação
    /// </summary>
    public sealed class PostOperacaoRequest : BaseRequest
    {
        #region Public Properties

        /// <summary>
        /// Nome operação
        /// </summary>
        [Required, JsonProperty("nome")]
        public string Nome { get; set; }

        [JsonProperty("descricao")]
        public string Descricao { get; set; }

        [JsonProperty("tipoEvento")]
        public EnumTipoEvento TipoEvento { get; set; }

        [JsonProperty("data")]
        public DateTime Data { get; set; }

        [JsonProperty("local")]
        public string Local { get; set; }

        /// <summary>
        /// Código identificador do grupo de operação
        /// </summary>
        [JsonProperty("operacaoGrupoId")]
        public int OperacaoGrupoId { get; set; }

        #endregion
    }
}
