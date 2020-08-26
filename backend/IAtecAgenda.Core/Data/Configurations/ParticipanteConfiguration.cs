using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using IAtecAgenda.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IAtecAgenda.Core.Data.Configurations
{
    internal sealed class ParticipanteConfiguration : EntityConfiguration<Participante>
    {
        public override void Configure(EntityTypeBuilder<Participante> builder)
        {
            builder.ToTable("Participante");

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Ativo).IsRequired();
            builder.Property(p => p.Id).ValueGeneratedNever();
            builder.Property(p => p.Nome).HasMaxLength(500).IsRequired();
        }

        public override IEnumerable<Participante> Seed()
        {
            return new Participante[]
            {
                new Participante { Id = 1, Nome = "Participante 1",Email = "participante1@email.com.br"},
                new Participante { Id = 2, Nome = "Participante 2",Email = "participante2@email.com.br"}
            };
        }
    }
}
