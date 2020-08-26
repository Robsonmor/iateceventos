using IAtecAgenda.Domain.Contracts.Schemas.Usuario;
using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Requests.Usuario
{
    /// <summary>
    /// Objeto de requisição de usuário
    /// </summary>
    public class UsuarioRequest: BaseRequest
    {
        #region Public Properties
        /// <summary>
        /// MaloteEnglobador
        /// </summary>        
        [JsonProperty("data")]
        public UsuarioSchema Data { get; set; }        
        #endregion

    }
}
