using IAtecAgenda.Domain.Contracts.Schemas.Usuario;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Contracts.Requests.Usuario
{
    /// <summary>
    /// Objeto de requisição para associar usuário
    /// </summary>
    public class AssociateUsuarioFilaRequest : BaseRequest
    {
        #region Public Properties
        /// <summary>
        /// Coleção de Filas
        /// </summary>        
        [JsonProperty("filas")]
        public IEnumerable<AssociateUsuarioFilaSchema> Filas { get; set; }        
        #endregion

    }
}
