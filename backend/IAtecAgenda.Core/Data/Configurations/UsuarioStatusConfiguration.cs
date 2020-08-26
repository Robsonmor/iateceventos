using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Enumerations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;

namespace IAtecAgenda.Core.Data.Configurations
{
    internal sealed class UsuarioStatusConfiguration : EntityConfiguration<UsuarioStatus>
    {
        public override void Configure(EntityTypeBuilder<UsuarioStatus> builder)
        {
            builder.ToTable("AspNetUserStatus");

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Id).ValueGeneratedNever().IsRequired();
            builder.Property(p => p.Nome).HasMaxLength(180).IsRequired();
        }

        public override IEnumerable<UsuarioStatus> Seed()
        {
            foreach (var item in Enum.GetValues(typeof(EnumUsuarioStatus)))
                yield return new UsuarioStatus { Id = (int)item, Nome = item.ToDescription() };
        }
    }
}
