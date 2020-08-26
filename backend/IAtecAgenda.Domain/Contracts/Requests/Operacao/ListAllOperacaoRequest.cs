using IAtecAgenda.Domain.Enumerations;
using Newtonsoft.Json;
using System;

namespace IAtecAgenda.Domain.Contracts.Requests.Operacao
{
    /// <summary>
    /// Objeto que contém as definições do critério de pesquisa
    /// </summary>
    public sealed class ListAllOperacaoRequest : PaginatedRequest
    {
        #region Public Properties

        /// <summary>
        /// Código identificador do grupo operacional
        /// </summary>
        [JsonProperty("operacaoGrupoId")]
        public int? OperacaoGrupoId { get; set; }

        [JsonProperty("descricao")]
        public string Descricao { get; set; }

        [JsonProperty("tipoEvento")]
        public EnumTipoEvento TipoEvento { get; set; }

        [JsonProperty("data")]
        public DateTime Data { get; set; }

        [JsonProperty("local")]
        public string Local { get; set; }

        /// <summary>
        /// Termo de pesquisa
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }

        #endregion
    }
}
