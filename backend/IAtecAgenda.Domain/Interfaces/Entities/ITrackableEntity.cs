using System;

namespace IAtecAgenda.Domain.Interfaces.Entities
{
    public interface ITrackableEntity<TKey> : IBaseEntity
    {
        #region ITrackableEntity Members

        TKey Id { get; set; }

        string CriadoPorId { get; set; }
        DateTime DataCadastro { get; set; }

        string AlteradoPorId { get; set; }
        DateTime? DataAlteracao { get; set; }

        #endregion
    }
}
