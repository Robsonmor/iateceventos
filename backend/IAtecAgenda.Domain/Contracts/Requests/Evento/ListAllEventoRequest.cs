using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Requests.Evento
{
    /// <summary>
    /// Objeto que contém as definições do critério de pesquisa
    /// </summary>
    public sealed class ListAllEventoRequest : PaginatedRequest
    {
        #region Public Properties

        /// <summary>
        /// Código identificador da operacao operacional
        /// </summary>
        [JsonProperty("operacaoId")]
        public int? OperacaoId { get; set; }

        /// <summary>
        /// Termo de pesquisa
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }

        #endregion
    }
}
