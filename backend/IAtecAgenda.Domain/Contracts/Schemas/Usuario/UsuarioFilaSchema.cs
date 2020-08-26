using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Usuario
{
    /// <summary>
    /// Objeto que contém a definição de dados do Usuario
    /// </summary>
    public sealed class UsuarioFilaSchema : ISchema
    {
        #region Public Properties
        /// <summary>
        /// Código da Fila
        /// </summary>        
        [JsonProperty("filaId")]
        public int FilaId { get; set; }
        /// <summary>
        /// Descrição da Fila
        /// </summary>        
        [JsonProperty("fila")]
        public string Fila { get; set; }
        /// <summary>
        /// Prioridade do Usuário na fila
        /// </summary>        
        [JsonProperty("prioridade")]
        public short Prioridade { get; set; }
        #endregion
    }
}
