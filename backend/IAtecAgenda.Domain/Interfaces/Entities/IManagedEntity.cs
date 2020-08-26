using System;

namespace IAtecAgenda.Domain.Interfaces.Entities
{
    public interface IManagedEntity<TKey> : IBaseEntity
    {
        #region IManagedEntity Members

        TKey Id { get; set; }
        string CriadoPorId { get; set; }
        DateTime DataCadastro { get; set; }

        #endregion
    }
}
