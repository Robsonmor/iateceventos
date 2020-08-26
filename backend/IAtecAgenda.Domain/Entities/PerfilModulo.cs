using System;
using System.Runtime.Serialization;

namespace IAtecAgenda.Domain.Entities
{
    [DataContract]
    [Serializable]
    public class PerfilModulo : BaseEntity
    {
        #region Public Properties

        [DataMember]
        public string RoleId { get; set; }
        [DataMember]
        public int ModuloId { get; set; }

        #endregion

        #region Navigation Properties

        public virtual Perfil Perfil { get; set; }
        public virtual Modulo Modulo { get; set; }

        #endregion
    }
}
