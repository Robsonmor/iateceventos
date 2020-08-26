using IAtecAgenda.Domain.Contracts.Schemas.Usuario;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Contracts.Responses.Usuario
{
    public class FindAllUsuarioResponse : PaginatedResponse<UsuarioSchema>
    {
        #region Constructor
        public FindAllUsuarioResponse(int pageIndex, int pageSize, int length)
           : base(pageIndex, pageSize, length, data: null)
        { }

        public FindAllUsuarioResponse(int pageIndex, int pageSize, int length, IEnumerable<UsuarioSchema> data)
             : base(pageIndex, pageSize, length, data)
        {

        }
        #endregion



    }
}
