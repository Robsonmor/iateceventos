using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;

namespace IAtecAgenda.Domain.Contracts.Schemas.Participante
{
    /// <summary>
    /// Objeto de resposta para listagem de itens motivos de rejeiçao
    /// </summary>
    public sealed class GetAllParticipanteSchema : ISchema
    {
        /// <summary>
        /// Identificador de motivo de rejeição
        /// </summary>
        [JsonProperty("ParticipanteId")]
        public int ParticipanteId { get; set; }

        /// <summary>
        /// Nome do motivo de rejeição
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }

        /// <summary>
        /// Status de ativo/não ativo
        /// </summary>
        [JsonProperty("ativo")]
        public bool Ativo { get; set; }
    }
}
