using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Core.Helpers;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;

namespace IAtecAgenda.Core.Data.Configurations
{
    internal sealed class ConfiguracaoConfiguration : EntityConfiguration<Configuracao>
    {
        public override void Configure(EntityTypeBuilder<Configuracao> builder)
        {
            builder.ToTable("Configuracao");

            builder.HasKey(p => new { p.Grupo, p.Chave });

            builder.Property(p => p.Grupo).HasMaxLength(80).IsRequired();
            builder.Property(p => p.Chave).HasMaxLength(80).IsRequired();
            builder.Property(p => p.Descricao).IsRequired();
            builder.Property(p => p.Tipo).HasMaxLength(80).IsRequired();
            builder.Property(p => p.Valor);
            builder.Property(p => p.Parametros);
            builder.Property(p => p.CriadoPorId).IsRequired();
            builder.Property(p => p.DataCadastro).IsRequired();
            builder.Property(p => p.AlteradoPorId);
            builder.Property(p => p.DataAlteracao);
        }

        public override IEnumerable<Configuracao> Seed()
        {
            ConfigHelper.TryGet<GlobalConfig>("GlobalConfig", out var config);
           

            return new Configuracao[]
            {
                new Configuracao
                {
                    Grupo = "identityServer",
                    Chave = "identityServer:configuration",
                    Descricao = "Parâmetros de configuração do serviço de autorização.",
                    Tipo = "string",
                    Parametros = new IdentityServerConfig()
                    {
                        Authority = "https://localhost:5001",
                        Clients = new List<IdentityServerClientConfig>
                        {
                            new IdentityServerClientConfig
                            {
                                ClientId = "frontend.app",
                                ClientSecret = "agenda",
                                AccessTokenLifetime = (int)new TimeSpan(hours: 1, minutes: 0, seconds: 0).TotalSeconds
                            }
                        }
                    }.SerializeToDataContract(),
                    CriadoPorId = Guid.Empty.ToString(),
                    DataCadastro = new DateTime(DateTime.Now.Year,1,1)
                }      
            };
        }
    }
}