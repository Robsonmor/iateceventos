using IAtecAgenda.Domain.Contracts.Schemas.Operacao;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Contracts.Schemas.GrupoOperacao
{
    /// <summary>
    /// Objeto que contém as definições do grupo de operações
    /// </summary>
    public sealed class OperacaoGrupoSchema : BaseSchema
    {
        #region Public Properties

        /// <summary>
        /// Código identificador do grupo
        /// </summary>
        [JsonProperty("operacaoGrupoId")]
        public int OperacaoGrupoId { get; set; }

        /// <summary>
        /// Nome do grupo
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }

        /// <summary>
        /// Coleção que operações do grupo
        /// </summary>
        [JsonProperty("operacoes")]
        public ICollection<OperacaoSchema> Operacoes { get; set; }

        #endregion
    }
}
