using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.MotivoRejeicao
{
    
    public sealed class ParticipanteEventoSchema : ISchema
    {
        #region Public Properties

        /// <summary>
        /// Identificador
        /// </summary>
        [JsonProperty("id")]
        public int Id { get; set; }
        /// <summary>
        /// Identificador do Participante
        /// </summary>
        [JsonProperty("participanteEventoId")]
        public int ParticipanteEventoId { get; set; }
        /// <summary>
        /// Nome de motivo
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }
        /// <summary>
        /// Nome de motivo
        /// </summary>
        [JsonProperty("email")]
        public string Email { get; set; }

        #endregion     
    }
}
