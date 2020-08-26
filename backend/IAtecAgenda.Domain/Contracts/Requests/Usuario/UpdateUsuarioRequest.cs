using Newtonsoft.Json;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Contracts.Requests.Usuario
{
    public class UpdateUsuarioRequest : BaseRequest
    {
        #region Public Properties
        
        /// <summary>
        /// Id
        /// </summary>        
        [JsonProperty("id")]
        public string Id { get; set; }
        
        /// <summary>
        /// Identificação de status (ID)
        /// </summary>        
        [JsonProperty("statusId")]
        public int StatusId { get; set; }
        
        /// <summary>
        /// Identificação de perfil (ID)
        /// </summary>        
        [JsonProperty("perfilId")]
        public string PerfilId { get; set; }
        
        /// <summary>
        /// Email
        /// </summary>       
        [JsonProperty("email")]
        public string Email { get; set; }

        /// <summary>
        /// BUs restritos para o usuario
        /// </summary>
        public IEnumerable<int> BUs { get; set; } = new int[] { };

        #endregion

    }
}
