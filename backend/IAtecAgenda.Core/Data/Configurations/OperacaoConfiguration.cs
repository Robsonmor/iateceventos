using IAtecAgenda.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace IAtecAgenda.Core.Data.Configurations
{
    internal sealed class OperacaoConfiguration : EntityConfiguration<Operacao>
    {
        public override void Configure(EntityTypeBuilder<Operacao> builder)
        {
            builder.ToTable("Operacao");

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Id).ValueGeneratedNever();
            builder.Property(p => p.OperacaoGrupoId).IsRequired();
            builder.Property(p => p.Nome).HasMaxLength(180).IsRequired();
          


            builder.HasOne(p => p.OperacaoGrupo)
                .WithMany(p => p.Operacoes)
                .HasForeignKey(p => p.OperacaoGrupoId).OnDelete(DeleteBehavior.Restrict);
        }

        public override IEnumerable<Operacao> Seed()
        {
            return new Operacao[]
            {
                new Operacao { Id = 90010000, OperacaoGrupoId = 90000000, Nome = "TRATAMENTO MANUAL" },
            };
        }
    }
}
