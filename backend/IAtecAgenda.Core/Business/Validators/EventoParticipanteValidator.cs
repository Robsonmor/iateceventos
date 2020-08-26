using FluentValidation;
using IAtecAgenda.Domain.Entities;

namespace IAtecAgenda.Core.Business.Validators
{
    internal sealed class EventoParticipanteValidator : AbstractValidator<EventoParticipante>
    {
        public EventoParticipanteValidator()
        { }
    }
}
