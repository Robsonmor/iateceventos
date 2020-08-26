using Microsoft.EntityFrameworkCore;
using IAtecAgenda.Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IAtecAgenda.Core.Data.Configurations
{
    internal sealed class PerfilModuloConfiguration : EntityConfiguration<PerfilModulo>
    {
        public override void Configure(EntityTypeBuilder<PerfilModulo> builder)
        {
            builder.ToTable("PerfilModulo");

            builder.HasKey(p => new { p.RoleId, p.ModuloId });

            builder.HasOne(p => p.Perfil)
                .WithMany(p => p.Modulos)
                .HasForeignKey(p => p.RoleId).IsRequired().OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(p => p.Modulo)
               .WithMany(p => p.Perfis)
               .HasForeignKey(p => p.ModuloId).IsRequired().OnDelete(DeleteBehavior.Restrict);
        }
    }
}
