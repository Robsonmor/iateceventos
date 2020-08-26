using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Microsoft.AspNetCore.Identity;
using IAtecAgenda.Domain.Interfaces.Entities;

namespace IAtecAgenda.Domain.Entities
{
    [DataContract]
    [Serializable]
    public class Usuario : IdentityUser, IBaseEntity
    {
        #region Public Properties

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public string Surname { get; set; }

        [DataMember]
        public int StatusId { get; set; }

        #endregion

        #region Navigation Properties

        public virtual UsuarioStatus Status { get; set; }
        public virtual ICollection<IdentityUserRole<string>> Roles { get; } = new List<IdentityUserRole<string>>();
        public virtual ICollection<IdentityUserClaim<string>> Claims { get; } = new List<IdentityUserClaim<string>>();

        #endregion

        #region Public Members

        public object Clone() => MemberwiseClone();

        #endregion
    }
}