using Microsoft.EntityFrameworkCore;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace IAtecAgenda.Core.Data
{
    public sealed class EFContext : IdentityDbContext<Usuario>
    {
        #region Constructors

        public EFContext(DbContextOptions<EFContext> options)
            : base(options)
        { }

        #endregion

        #region Overriden Methods

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.HasDefaultSchema("dbo");

            builder.ConfigureIdentity();
            builder.LoadAllConfigurations();
            builder.RemoveCascadeDeleteConvention();
        }

        #endregion
    }
}
