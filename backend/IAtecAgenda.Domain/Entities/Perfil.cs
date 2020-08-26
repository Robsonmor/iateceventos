using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using IAtecAgenda.Domain.Interfaces.Entities;

namespace IAtecAgenda.Domain.Entities
{
    public class Perfil : IdentityRole, IBaseEntity
    {
        #region Navigation Properties

        public virtual ICollection<PerfilModulo> Modulos { get; set; }

        #endregion

        #region Public Methods

        public object Clone() => MemberwiseClone();

        #endregion
    }
}
