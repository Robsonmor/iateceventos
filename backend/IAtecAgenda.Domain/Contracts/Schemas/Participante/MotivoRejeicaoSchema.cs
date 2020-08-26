using Newtonsoft.Json;
using System.Collections.Generic;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;

namespace IAtecAgenda.Domain.Contracts.Schemas.Participante
{
    /// <summary>
    /// Schema para motivo de rejeição
    /// </summary>
    public sealed class ParticipanteSchema : ISchema
    {
        /// <summary>
        /// Código identificador do motivo
        /// </summary>
        [JsonProperty("ParticipanteId")]
        public int ParticipanteId { get; set; }

        /// <summary>
        /// Nome de motivo
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }

        /// <summary>
        /// Flag de ativo ou não ativo
        /// </summary>
        [JsonProperty("ativo")]
        public bool Ativo { get; set; }

        /// <summary>
        /// Objeto de operação grupo
        /// </summary>
        [JsonProperty("operacaoGrupos")]
        public IEnumerable<ParticipanteSchema> OperacaoGrupos { get; set; }
    }

}