using System.Collections.Generic;

namespace IAtecAgenda.Domain.Interfaces.Contracts.Responses
{
    public interface ICollectionTypeResponse<Type> 
    {
        #region ICollectionTypeResponse Members

        IEnumerable<Type> Data { get; set; }

        #endregion
    }
}
