using IAtecAgenda.Domain.Contracts.Schemas.Operacao;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Contracts.Responses.Operacao
{
    public sealed class ListAllOperacaoResponse : PaginatedResponse<ListAllOperacaoSchema>
    {
        #region Constructors

        public ListAllOperacaoResponse(int pageIndex, int pageSize, int length)
            : base(pageIndex, pageSize, length)
        { }

        public ListAllOperacaoResponse(int pageIndex, int pageSize, int length, IEnumerable<ListAllOperacaoSchema> data)
            : base(pageIndex, pageSize, length, data)
        { }

        #endregion
    }
}
