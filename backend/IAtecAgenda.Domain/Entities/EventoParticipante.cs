using System;
using System.Runtime.Serialization;

namespace IAtecAgenda.Domain.Entities
{
    [DataContract]
    [Serializable]
    public class EventoParticipante : BaseEntity
    {
        #region Public Properties

        [DataMember]
        public int EventoId { get; set; }

        [DataMember]
        public int ParticipanteId { get; set; }

        #endregion

        #region Navigation Properties

        public virtual Evento Evento { get; set; }
        public virtual Participante Participante { get; set; }

        #endregion
    }
}
