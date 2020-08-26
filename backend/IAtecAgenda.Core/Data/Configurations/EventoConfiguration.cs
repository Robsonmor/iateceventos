using IAtecAgenda.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IAtecAgenda.Core.Data.Configurations
{
    internal sealed class EventoConfiguration : EntityConfiguration<Evento>
    {
        public override void Configure(EntityTypeBuilder<Evento> builder)
        {
            builder.ToTable("Evento");

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Id).ValueGeneratedNever();
            builder.Property(p => p.Nome).HasMaxLength(255).IsRequired();
            builder.Property(p => p.TipoEvento).IsRequired().HasDefaultValue(false);
            builder.Property(p => p.Descricao);
            builder.Property(p => p.Data);
            builder.Property(p => p.Local).IsRequired().HasDefaultValue(false);
        }
    }
}
