using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;

namespace IAtecAgenda.Domain.Interfaces.Contracts.Responses
{
    public interface ISingleResponse<TSchema> : IBaseResponse
        where TSchema : class, ISchema
    {
        #region ISingleResponse Members

        TSchema Data { get; set; }

        #endregion
    }
}
