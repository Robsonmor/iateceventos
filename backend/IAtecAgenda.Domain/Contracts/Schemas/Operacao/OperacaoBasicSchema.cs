using IAtecAgenda.Domain.Enumerations;
using Newtonsoft.Json;
using System;

namespace IAtecAgenda.Domain.Contracts.Schemas.Operacao
{
    /// <summary>
    /// Objeto que contém as definições da fila
    /// </summary>
    public sealed class OperacaoBasicSchema : BaseSchema
    {
        #region Public Properties
        /// <summary>
        /// Código identificador da operação
        /// </summary>
        [JsonProperty("operacaoId")]
        public int OperacaoId { get; set; }
        /// <summary>
        /// Nome da operação
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }

        [JsonProperty("descricao")]
        public string Descricao { get; set; }

        [JsonProperty("tipoEvento")]
        public EnumTipoEvento TipoEvento { get; set; }

        [JsonProperty("data")]
        public DateTime Data { get; set; }

        [JsonProperty("local")]
        public string Local { get; set; }

        #endregion
    }
}
