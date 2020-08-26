using System.Collections.Generic;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;

namespace IAtecAgenda.Domain.Interfaces.Contracts.Responses
{
    public interface ICollectionResponse<TSchema> : IBaseResponse
        where TSchema : class, ISchema
    {
        #region ICollectionResponse Members

        IEnumerable<TSchema> Data { get; set; }

        #endregion
    }
}
