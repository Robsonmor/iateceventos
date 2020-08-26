using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Contracts.Schemas.Usuario
{
    /// <summary>
    /// Objeto que contém a definição de dados do Usuario
    /// </summary>
    public sealed class UsuarioSchema : ISchema
    {
        #region Public Properties
        /// <summary>
        /// Id
        /// </summary>       
        [JsonProperty("id")]
        public string Id { get; set; }
        /// <summary>
        /// Matricula
        /// </summary>  
        [JsonProperty("matricula")]
        public string Matricula { get; set; }
        /// <summary>
        /// Login
        /// </summary>       
        [JsonProperty("login")]
        public string Login { get; set; }
        /// <summary>
        /// NomeCompleto
        /// </summary>       
        [JsonProperty("nomeCompleto")]
        public string NomeCompleto { get; set; }
        /// <summary>
        /// TipoUsuario
        /// </summary>     
        [JsonProperty("tipoUsuario")]
        public string TipoUsuario { get; set; }
        /// <summary>
        /// Status
        /// </summary>        
        [JsonProperty("status")]
        public string Status { get; set; }
        /// <summary>
        /// Status
        /// </summary>    
        [JsonProperty("statusId")]
        public int StatusId { get; set; }
        /// <summary>
        /// Perfil
        /// </summary>        
        [JsonProperty("perfil")]
        public string Perfil { get; set; }

        /// <summary>
        /// Código do Perfil
        /// </summary>        
        [JsonProperty("perfilId")]
        public string PerfilId { get; set; }

        /// <summary>
        /// Email
        /// </summary>        
        [JsonProperty("email")]
        public string Email { get; set; }

        /// <summary>
        /// Coleção de BUs
        /// </summary>        
        [JsonProperty("bus")]
        public IEnumerable<BusinessUnitSchema> BUs { get; set; }


        #endregion
    }
}
