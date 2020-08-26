using IAtecAgenda.Domain.Contracts.Schemas.MotivoRejeicao;
using IAtecAgenda.Domain.Enumerations;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Contracts.Schemas.Evento
{
    /// <summary>
    /// Objeto que contém a definição de dados do Evento
    /// </summary>
    public sealed class EventoSchema : ISchema
    {
        #region Public Properties

        /// <summary>
        /// Id
        /// </summary>        
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("nome")]
        public string Nome { get; set; }

        [JsonProperty("descricao")]
        public string Descricao { get; set; }

        [JsonProperty("tipoEvento")]
        public EnumTipoEvento TipoEvento { get; set; }

        [JsonProperty("data")]
        public DateTime Data { get; set; }

        [JsonProperty("local")]
        public string Local { get; set; }

        #endregion


        #region Navigation Properties


        /// <summary>
        /// participantesEvento
        /// </summary>        
        [JsonProperty("participantesEvento")]
        public ICollection<ParticipanteEventoSchema> ParticipantesEvento { get; set; }

        #endregion
    }
}
