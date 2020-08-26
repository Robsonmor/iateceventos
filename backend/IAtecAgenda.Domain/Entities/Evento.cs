using IAtecAgenda.Domain.Enumerations;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace IAtecAgenda.Domain.Entities
{
    [DataContract]
    [Serializable]
    public class Evento : Entity<int>
    {
        #region Public Properties

        [DataMember]
        public string Nome { get; set; }

        [DataMember]
        public string Descricao { get; set; }

        [DataMember]
        public int TipoEvento { get; set; }        

        [DataMember]
        public DateTime Data { get; set; }

        [DataMember]
        public string Local { get; set; }

        #endregion

        #region Navigation Properties
      
        public virtual ICollection<EventoParticipante> EventosParticipante { get; set; }
      
        #endregion
    }
}
