using IAtecAgenda.Domain.Entities;
using FluentValidation;

namespace IAtecAgenda.Core.Business.Validators
{
    internal sealed class ParticipanteValidator : AbstractValidator<Participante>
    {
        public ParticipanteValidator()
        {
            RuleFor(p => p.Nome).NotNull().NotEmpty();
            RuleFor(p => p.Id).NotNull().NotEmpty();
        }
    }
}
