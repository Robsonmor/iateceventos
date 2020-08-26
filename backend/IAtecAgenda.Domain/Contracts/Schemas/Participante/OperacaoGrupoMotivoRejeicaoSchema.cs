using Newtonsoft.Json;
using System.Collections.Generic;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;

namespace IAtecAgenda.Domain.Contracts.Schemas.MotivoRejeicao
{
    /// <summary>
    /// Schema para grupo de operação
    /// </summary>
    public sealed class OperacaoGrupoMotivoRejeicaoSchema : ISchema
    {
        #region Public Properties

        /// <summary>
        /// Identificador de grupo de operação
        /// </summary>
        [JsonProperty("operacaoGrupoId")]
        public int OperacaoGrupoId { get; set; }
        /// <summary>
        /// Nome de grupo de operação
        /// </summary>
        [JsonProperty("operacaoGrupoNome")]
        public string OperacaoGrupoNome { get; set; }
        /// <summary>
        /// Objeto de lista de operações
        /// </summary>
        [JsonProperty("operacoes")]
        public IEnumerable<OperacaoGrupoMotivoRejeicaoSchema> Operacoes { get; set; }

        #endregion
    }
}
