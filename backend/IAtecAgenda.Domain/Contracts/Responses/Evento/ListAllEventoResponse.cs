using IAtecAgenda.Domain.Contracts.Schemas.Evento;
using System.Collections.Generic;

namespace IAtecAgenda.Domain.Contracts.Responses.Evento
{
    public sealed class ListAllEventoResponse : PaginatedResponse<EventoSchema>
    {
        #region Constructors

        public ListAllEventoResponse(int pageIndex, int pageSize, int length)
            : base(pageIndex, pageSize, length)
        { }

        public ListAllEventoResponse(int pageIndex, int pageSize, int length, IEnumerable<EventoSchema> data)
            : base(pageIndex, pageSize, length, data)
        { }

        #endregion
    }
}
