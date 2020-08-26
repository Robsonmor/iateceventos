using FluentValidation;
using System.Threading.Tasks;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;

namespace IAtecAgenda.Domain.Interfaces.Business.Services
{
    public interface IParticipanteService : IGenericService<Participante, int, IValidator<Participante>, IParticipanteRepository>
    {
        #region IParticipanteService Members

        Task<PagedListEntity<Participante>> PagedList(string descricao, int pageIndex, int pageSize);

        #endregion
    }
}
