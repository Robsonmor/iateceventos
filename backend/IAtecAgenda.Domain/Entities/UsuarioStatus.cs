using System;
using System.Runtime.Serialization;

namespace IAtecAgenda.Domain.Entities
{
    [DataContract]
    [Serializable]
    public class UsuarioStatus : Entity<int>
    {
        #region Public Properties

        [DataMember]
        public string Nome { get; set; }

        #endregion

        #region Navigation Properties

        public virtual Usuario Usuario { get; set; }

        #endregion
    }
}
