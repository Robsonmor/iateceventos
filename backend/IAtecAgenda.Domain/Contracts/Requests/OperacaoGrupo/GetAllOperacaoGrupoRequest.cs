using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Requests.OperacaoGrupo
{
    public sealed class GetAllOperacaoGrupoRequest : PaginatedRequest
    {
        #region Public Properties
        /// <summary>
        /// Pesquisa por parte do nome
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }
        #endregion
    }
}
