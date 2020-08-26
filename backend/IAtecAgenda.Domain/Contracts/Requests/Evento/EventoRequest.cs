using IAtecAgenda.Domain.Contracts.Schemas.MotivoRejeicao;
using IAtecAgenda.Domain.Enumerations;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Contracts.Requests.Evento
{
    /// <summary>
    /// Objeto que contém a definição de dados de uma operação
    /// </summary>
    public class EventoRequest : BaseRequest
    {
        #region Public Properties

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("nome")]
        public string Nome { get; set; }

        [JsonProperty("descricao")]
        public string Descricao { get; set; }

        [JsonProperty("tipoEventoId")]
        public int TipoEventoId { get; set; }

        [JsonProperty("data")]
        public DateTime Data { get; set; }

        [JsonProperty("local")]
        public string Local { get; set; }

     
        [JsonProperty("participantes")]
        public IEnumerable<ParticipanteEventoSchema> Participantes { get; set; }
        #endregion
    }
}
