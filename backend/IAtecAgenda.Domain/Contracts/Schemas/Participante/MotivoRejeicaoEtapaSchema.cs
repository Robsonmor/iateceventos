using IAtecAgenda.Domain.Contracts.Schemas.Usuario;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;
using System;

namespace IAtecAgenda.Domain.Contracts.Schemas.Participante
{
    /// <summary>
    /// Schema para motivo de rejeição
    /// </summary>
    public sealed class ParticipanteEtapaSchema : ISchema
    {
        /// <summary>
        /// Nome de motivo
        /// </summary>
        [JsonProperty("nome")]
        public string Nome { get; set; }
        /// <summary>
        /// Data cadatro
        /// </summary>
        [JsonProperty("dataCadastro")]
        public DateTime DataCadastro { get; set; }
        /// <summary>
        /// Usuário
        /// </summary>
        [JsonProperty("usuario")]
        public UsuarioSchema Usuario { get; set; }

    }

}