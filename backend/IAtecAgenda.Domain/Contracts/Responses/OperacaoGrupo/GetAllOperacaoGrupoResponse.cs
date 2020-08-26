using System.Collections.Generic;
using IAtecAgenda.Domain.Contracts.Schemas.GrupoOperacao;

namespace IAtecAgenda.Domain.Contracts.Responses.OperacaoGrupo
{
    public sealed class GetAllOperacaoGrupoResponse : PaginatedResponse<OperacaoGrupoSchema>
    {
        #region Constructors

        public GetAllOperacaoGrupoResponse(int pageIndex, int pageSize, int length)
            : base(pageIndex, pageSize, length)
        { }

        public GetAllOperacaoGrupoResponse(int pageIndex, int pageSize, int length, IEnumerable<OperacaoGrupoSchema> data)
            : base(pageIndex, pageSize, length, data)
        { }

        #endregion
    }
}
