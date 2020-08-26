using IAtecAgenda.Domain.Interfaces.Contracts.Responses;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Contracts.Responses
{
    public abstract class CollectionTypeResponse<Type> : ICollectionTypeResponse<Type>
      
    {
        #region Public Properties

        [JsonProperty("data")]
        public IEnumerable<Type> Data { get; set; }

        #endregion

        #region Constructors

        protected CollectionTypeResponse()
            : this(data: null)
        { }

        protected CollectionTypeResponse(IEnumerable<Type> data)
        {
            Data = data ?? new List<Type>();
        }

        #endregion
    }
}
