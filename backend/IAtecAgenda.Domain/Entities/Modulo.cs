using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace IAtecAgenda.Domain.Entities
{
    [DataContract]
    [Serializable]
    public class Modulo : Entity<int>
    {
        #region Public Properties

        [DataMember]
        public string Nome { get; set; }

        #endregion

        #region Navigation Properties

        public virtual ICollection<PerfilModulo> Perfis { get; set; }

        #endregion
    }
}
