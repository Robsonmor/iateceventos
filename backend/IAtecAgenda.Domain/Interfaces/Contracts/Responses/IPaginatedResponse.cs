using System.Collections.Generic;
using IAtecAgenda.Domain.Interfaces.Contracts.Schemas;

namespace IAtecAgenda.Domain.Interfaces.Contracts.Responses
{
    public interface IPaginatedResponse<TSchema> : IBaseResponse
        where TSchema : class, ISchema
    {
        #region IPaginatedResponse Members

        int Length { get; }
        int PageIndex { get; }
        int PageSize { get; }
        IEnumerable<TSchema> Data { get; set; }

        #endregion
    }
}
