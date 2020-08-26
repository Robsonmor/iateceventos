using System.Collections.Generic;

namespace IAtecAgenda.Domain.Interfaces.Contracts.Responses
{
    public interface IErrorResponse : IBaseResponse
    {
        #region IErrorResponse Members

        object Id { get; }
        string Message { get; }
        IEnumerable<object> Errors { get; set; }
        #endregion
    }
}
