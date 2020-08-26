using System;
using System.Runtime.Serialization;
using IAtecAgenda.Domain.Interfaces.Entities;

namespace IAtecAgenda.Domain.Entities
{
    [DataContract]
    [Serializable]
    public abstract class BaseEntity : IBaseEntity
    {
        #region Public Methods

        public object Clone() => MemberwiseClone();

        #endregion
    }
}
