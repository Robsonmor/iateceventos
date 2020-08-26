using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Contracts.Schemas.Participante
{
    /// <summary>
    /// Objeto com operações
    /// </summary>
    public class ParticipanteEventoSchema : ISchema
    {
        #region Public Properties
        /// <summary>
        /// Identificador de operação
        /// </summary>
        [JsonProperty("operacaoId")]
        public int OperacaoId { get; set; }
        /// <summary>
        /// Nome de operação
        /// </summary>
        [JsonProperty("operacaoNome")]
        public string OperacaoNome { get; set; }
        /// <summary>
        /// Objeto contendo a listagem de atividade
        /// </summary>
        [JsonProperty("atividades")]
        public IEnumerable<ParticipanteEventoSchema> Atividades { get; set; }
        #endregion
    }
}
