using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Usuario
{
    /// <summary>
    /// Objeto que contém a definição de dados do Usuario
    /// </summary>
    public sealed class AssociateUsuarioFilaSchema : ISchema
    {
        #region Public Properties

        /// <summary>
        /// Código da Fila
        /// </summary>        
        [JsonProperty("filaId")]
        public int FilaId { get; set; }

        /// <summary>
        /// Prioridade do Usuário na fila
        /// </summary>        
        [JsonProperty("prioridade")]
        public short Prioridade { get; set; }

        /// <summary>
        /// Checkbox de Associacao
        /// </summary>        
        [JsonProperty("checked")]
        public bool Checked { get; set; }

        /// <summary>
        /// Flag que identifica se o usuário irá tratar somente itens priorizados desta fila
        /// </summary>
        [JsonProperty("priorizado")]
        public bool Priorizado { get; set; }

        #endregion
    }
}
