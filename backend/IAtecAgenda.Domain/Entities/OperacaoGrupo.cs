using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace IAtecAgenda.Domain.Entities
{
    [DataContract]
    [Serializable]
    public class OperacaoGrupo : Entity<int>
    {
        #region Public Properties

        [DataMember]
        public string Nome { get; set; }

        #endregion

        #region Navigation Properties

        public virtual ICollection<Operacao> Operacoes { get; set; }

        #endregion
    }
}
