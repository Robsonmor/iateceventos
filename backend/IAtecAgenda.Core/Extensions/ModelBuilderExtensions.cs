using System;
using System.Linq;
using System.Reflection;
using System.Collections.Generic;
using IAtecAgenda.Core.Helpers;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Enumerations;
using IAtecAgenda.Domain.Infrastructure;
using IAtecAgenda.Core.Data.Configurations;
using IAtecAgenda.Domain.Interfaces.Entities;

namespace IAtecAgenda.Core.Extensions
{
    internal static class ModelBuilderExtensions
    {
        #region Extension Methods

        public static void AddConfiguration<TEntity>(this ModelBuilder modelBuilder, EntityConfiguration<TEntity> entityConfiguration)
            where TEntity : class, IBaseEntity
        {
            modelBuilder.Entity<TEntity>(entityConfiguration.Configure);
            modelBuilder.Entity<TEntity>().HasData(entityConfiguration.Seed());
        }

        public static void LoadAllConfigurations(this ModelBuilder modelBuilder)
        {
            var assemblies = Assembly.GetExecutingAssembly().GetTypes()
                .Where(x =>
                       x.Name.EndsWith("Configuration", StringComparison.OrdinalIgnoreCase)
                    && x.Namespace.EndsWith("Data.Configurations", StringComparison.OrdinalIgnoreCase)
                );

            foreach (var assembly in assemblies)
            {
                dynamic instance = Activator.CreateInstance(assembly);
                ModelBuilderExtensions.AddConfiguration(modelBuilder, instance);
            }
        }

        public static void RemoveCascadeDeleteConvention(this ModelBuilder modelBuilder)
        {
            var imutableEntities = modelBuilder.Model.GetEntityTypes()
                .Where(e => !e.IsOwned())
                .SelectMany(e => e.GetForeignKeys());

            foreach (var relationship in imutableEntities)
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }
        }

        public static void ConfigureIdentity(this ModelBuilder modelBuilder)
        {
            ConfigHelper.TryGet<GlobalConfig>("GlobalConfig", out var config);

            modelBuilder.Entity<Usuario>(p =>
            {
                p.Property(x => x.StatusId).IsRequired();
                p.Property(x => x.Name).HasMaxLength(100);
                p.Property(x => x.Surname).HasMaxLength(100);

                p.HasIndex(x => x.StatusId).IsUnique(false);
                p.HasMany(x => x.Roles).WithOne().HasForeignKey(ur => ur.UserId).IsRequired();
                p.HasMany(x => x.Claims).WithOne().HasForeignKey(ur => ur.UserId).IsRequired();

                var usuario = new Usuario
                {
                    Id = Guid.Empty.ToString(),
                    Name = "ADMINISTRADOR",
                    UserName = @"admin",
                    NormalizedUserName = @"ADMIN",
                    Email = "no-reply@email.com.br",
                    NormalizedEmail = "NO-REPLY@EMAIL.COM.BR",
                    EmailConfirmed = true,
                    LockoutEnabled = false,
                    StatusId = (int)EnumUsuarioStatus.Ativo
                };

                usuario.PasswordHash = new PasswordHasher<Usuario>().HashPassword(usuario, config.DefaultUserPassword);
                usuario.SecurityStamp = Guid.Empty.ToString();
                usuario.ConcurrencyStamp = Guid.Empty.ToString();

                p.HasData(usuario);
            });

            modelBuilder.Entity<Perfil>(p =>
            {
                var collection = LoadRoles();
                p.HasData(collection);
            });

            modelBuilder.Entity<IdentityUserRole<string>>(p =>
            {
                p.HasData(new IdentityUserRole<string>[]{
                        new IdentityUserRole<string> { UserId = Guid.Empty.ToString(), RoleId = ((int)EnumPerfil.Sistema).ToString() }
                });
            });
        }

        #endregion

        #region Private Methods

        private static IEnumerable<Perfil> LoadRoles()
        {
            foreach (var item in Enum.GetValues(typeof(EnumPerfil)))
                yield return new Perfil { Id = ((int)item).ToString(), Name = item.ToString(), NormalizedName = item.ToString().ToUpper(), ConcurrencyStamp = Guid.Empty.ToString() };
        }

        #endregion
    }
}
