using Newtonsoft.Json;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;
using IAtecAgenda.Domain.Interfaces.Contracts.Responses;

namespace IAtecAgenda.Domain.Contracts.Responses
{
    public abstract class SingleResponse<TSchema> : ISingleResponse<TSchema>
        where TSchema : class, ISchema
    {
        #region Public Properties

        /// <summary>
        /// Objeto que contém os atributos do objeto resultante da pesquisa
        /// </summary>
        [JsonProperty("data")]
        public TSchema Data { get; set; }

        #endregion

        #region Constructors

        protected SingleResponse() { }
        protected SingleResponse(TSchema schema) => Data = schema;

        #endregion
    }
}
