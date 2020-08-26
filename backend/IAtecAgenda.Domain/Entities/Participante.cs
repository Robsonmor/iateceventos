using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace IAtecAgenda.Domain.Entities
{
    [DataContract]
    [Serializable]
    public class Participante : Entity<int>
    {
        #region Public Properties

        [DataMember]
        public string Nome { get; set; }

        [DataMember]
        public string Email { get; set; }

        [DataMember]
        public bool Ativo { get; set; }

        #endregion

        #region Navigation Properties

        public virtual ICollection<EventoParticipante> ParticipantesEvento { get; set; }

        #endregion
    }
}
