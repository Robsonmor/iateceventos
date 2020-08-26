using Newtonsoft.Json;
using System.Collections.Generic;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using IAtecAgenda.Domain.Interfaces.Contracts.Responses;

namespace IAtecAgenda.Domain.Contracts.Responses
{
    public abstract class CollectionResponse<TSchema> : ICollectionResponse<TSchema>
        where TSchema : class, ISchema
    {
        #region Public Properties

        [JsonProperty("data")]
        public IEnumerable<TSchema> Data { get; set; }

        #endregion

        #region Constructors

        protected CollectionResponse()
            : this(data: null)
        { }

        protected CollectionResponse(IEnumerable<TSchema> data)
        {
            Data = data ?? new List<TSchema>();
        }

        #endregion
    }
}
