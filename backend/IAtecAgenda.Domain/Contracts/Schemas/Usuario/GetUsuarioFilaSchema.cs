using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Usuario
{
    /// <summary>
    /// Objeto que contém a definição de dados do Usuario
    /// </summary>
    public sealed class GetUsuarioFilaSchema : ISchema
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
        /// <summary>
        /// Checked
        /// </summary>        
        [JsonProperty("checked")]
        public bool Checked { get; set; }
        /// <summary>
        /// Código da OperacaoGrupo
        /// </summary>        
        [JsonProperty("operacaoGrupoId")]
        public int? OperacaoGrupoId { get; set; }
        /// <summary>
        /// Código da Operacao
        /// </summary>        
        [JsonProperty("operacaoId")]
        public int? OperacaoId { get; set; }
        /// <summary>
        /// Operação do Grupo
        /// </summary>        
        [JsonProperty("operacaoGrupo")]
        public string OperacaoGrupo { get; set; }
        /// <summary>
        /// Operação
        /// </summary>        
        [JsonProperty("operacao")]
        public string Operacao { get; set; }
        /// <summary>
        /// Operação Código Externo
        /// </summary>        
        [JsonProperty("operacaoCodigoExterno")]
        public int? OperacaoCodigoExterno { get; set; }
        /// <summary>
        /// Atividade
        /// </summary>        
        [JsonProperty("atividade")]
        public string Atividade { get; set; }
        /// <summary>
        /// Código da Atividade
        /// </summary>        
        [JsonProperty("atividadeId")]
        public int? AtividadeId { get; set; }
        /// <summary>
        /// Código da Atividade Código Externo
        /// </summary>        
        [JsonProperty("atividadeCodigoExterno")]
        public int? AtividadeCodigoExterno { get; set; }
        /// <summary>
        /// Flag que define se o usuário irá tratar somente itens priorizados existentes na fila
        /// </summary>        
        [JsonProperty("priorizado")]
        public bool Priorizado { get; set; }

        #endregion
    }
}
