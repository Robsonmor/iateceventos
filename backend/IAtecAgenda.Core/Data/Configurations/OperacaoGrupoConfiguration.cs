using IAtecAgenda.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace IAtecAgenda.Core.Data.Configurations
{
    internal sealed class OperacaoGrupoConfiguration : EntityConfiguration<OperacaoGrupo>
    {
        public override void Configure(EntityTypeBuilder<OperacaoGrupo> builder)
        {
            builder.ToTable("OperacaoGrupo");

            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).ValueGeneratedNever();
            builder.Property(p => p.Nome).HasMaxLength(180).IsRequired();
        }

        public override IEnumerable<OperacaoGrupo> Seed()
        {
            return new OperacaoGrupo[]
            {
                new OperacaoGrupo { Id = 90000000, Nome ="TRATAMENTO MANUAL" },
            };
        }
    }
}
