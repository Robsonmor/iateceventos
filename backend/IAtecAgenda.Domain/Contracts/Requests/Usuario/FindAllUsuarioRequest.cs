using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Requests.Usuario
{
    /// <summary>
    /// Objeto que contém os parâmetros
    /// </summary>    
    public class FindAllUsuarioRequest : PaginatedRequest
    {
        /// <summary>
        /// Pesquisa por parte do nome
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }
    }
}
