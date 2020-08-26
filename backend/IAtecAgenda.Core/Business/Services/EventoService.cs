using FluentValidation;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace IAtecAgenda.Core.Business.Services
{
    public sealed class EventoService : GenericService<Evento, int, IValidator<Evento>, IEventoRepository>, IEventoService
    {
        #region Constructors

        public EventoService(ILogger<EventoService> logger, IValidator<Evento> validator, IEventoRepository repository)
            : base(logger, validator, repository)
        { }

        #endregion

        #region IEventoService Members

        public async Task<Evento> Find(int EventoId)
        {
            return await _repository.Find(
                predicate: x => x.Id == EventoId
                , include: x => x
                    .Include(p => p.EventosParticipante)
                        .ThenInclude(p => p.Participante)                                                
            );
        }

        public async Task<IEnumerable<Evento>> GetAll(bool? hasTemplate, int? eventoId)
        {
            if (!hasTemplate.HasValue && !eventoId.HasValue)
                return await _repository.GetAll();
            else
            {
                Expression<Func<Evento, bool>> predicate = null;


                if (eventoId.HasValue)
                {
                    predicate = predicate.And(x => x.Id == eventoId);
                }

                return await _repository.FindAll(
                    predicate,
                    orderBy: x => x.OrderBy(p => p.Nome)
                );
            }
        }


        public async Task<int> MaxByOperacao(int eventoId)
        {
            var exists = await _repository.FindAll(x => x.Id == eventoId);

            if (exists != null && exists.Any())
                return exists.Max(x => x.Id);
            else
                return eventoId;
        }

        public async Task<PagedListEntity<Evento>> PagedList(int pageSize, int pageIndex, int? eventoId, string nome)
        {
            return await _repository.PagedList(pageIndex, pageSize,
                predicate: p => p.Id == (eventoId ?? p.Id)
                                && p.Nome.Contains(nome ?? string.Empty)
                , orderBy: p => p.OrderBy(x => x.Nome)
                , include: p => p.Include(x => x.EventosParticipante)
            );
        }


        public async Task<Evento> FindUpdate(int EventoId)
        {
            return await _repository.Find(
                predicate: x => x.Id == EventoId
                , include: x => x                   
                    .Include(p => p.EventosParticipante)
                        .ThenInclude(p => p.Participante)                  
            );
        }

       

        #endregion
    }
}
