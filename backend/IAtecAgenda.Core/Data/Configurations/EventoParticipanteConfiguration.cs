using Microsoft.EntityFrameworkCore;
using IAtecAgenda.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IAtecAgenda.Core.Data.Configurations
{
    internal sealed class EventoParticipanteConfiguration : EntityConfiguration<EventoParticipante>
    {
        public override void Configure(EntityTypeBuilder<EventoParticipante> builder)
        {
            builder.ToTable("EventoParticipante");

            builder.HasKey(p => new { p.EventoId, p.ParticipanteId });

            builder.HasOne(p => p.Evento)
                .WithMany(p => p.EventosParticipante)
                .HasForeignKey(p => p.EventoId).OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(p => p.Participante)
                .WithMany(p => p.ParticipantesEvento)
                .HasForeignKey(p => p.ParticipanteId).OnDelete(DeleteBehavior.Restrict);
        }
    }
}
