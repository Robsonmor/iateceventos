using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IAtecAgenda.Core.Migrations
{
    public partial class CreateDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserStatus",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Nome = table.Column<string>(maxLength: 180, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserStatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Evento",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Nome = table.Column<string>(maxLength: 255, nullable: false),
                    Descricao = table.Column<string>(nullable: true),
                    TipoEvento = table.Column<int>(nullable: false, defaultValue: 0),
                    Data = table.Column<DateTime>(nullable: false),
                    Local = table.Column<string>(nullable: false, defaultValue: "False")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Evento", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Modulo",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Modulo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OperacaoGrupo",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Nome = table.Column<string>(maxLength: 180, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperacaoGrupo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Participante",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Nome = table.Column<string>(maxLength: 500, nullable: false),
                    Email = table.Column<string>(nullable: true),
                    Ativo = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Participante", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "dbo",
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    Name = table.Column<string>(maxLength: 100, nullable: true),
                    Surname = table.Column<string>(maxLength: 100, nullable: true),
                    StatusId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_AspNetUserStatus_StatusId",
                        column: x => x.StatusId,
                        principalSchema: "dbo",
                        principalTable: "AspNetUserStatus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PerfilModulo",
                schema: "dbo",
                columns: table => new
                {
                    RoleId = table.Column<string>(nullable: false),
                    ModuloId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PerfilModulo", x => new { x.RoleId, x.ModuloId });
                    table.ForeignKey(
                        name: "FK_PerfilModulo_Modulo_ModuloId",
                        column: x => x.ModuloId,
                        principalSchema: "dbo",
                        principalTable: "Modulo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PerfilModulo_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "dbo",
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Operacao",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    OperacaoGrupoId = table.Column<int>(nullable: false),
                    Nome = table.Column<string>(maxLength: 180, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Operacao", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Operacao_OperacaoGrupo_OperacaoGrupoId",
                        column: x => x.OperacaoGrupoId,
                        principalSchema: "dbo",
                        principalTable: "OperacaoGrupo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "EventoParticipante",
                schema: "dbo",
                columns: table => new
                {
                    EventoId = table.Column<int>(nullable: false),
                    ParticipanteId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventoParticipante", x => new { x.EventoId, x.ParticipanteId });
                    table.ForeignKey(
                        name: "FK_EventoParticipante_Evento_EventoId",
                        column: x => x.EventoId,
                        principalSchema: "dbo",
                        principalTable: "Evento",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_EventoParticipante_Participante_ParticipanteId",
                        column: x => x.ParticipanteId,
                        principalSchema: "dbo",
                        principalTable: "Participante",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalSchema: "dbo",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                schema: "dbo",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalSchema: "dbo",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                schema: "dbo",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "dbo",
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalSchema: "dbo",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                schema: "dbo",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalSchema: "dbo",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Configuracao",
                schema: "dbo",
                columns: table => new
                {
                    Grupo = table.Column<string>(maxLength: 80, nullable: false),
                    Chave = table.Column<string>(maxLength: 80, nullable: false),
                    Descricao = table.Column<string>(nullable: false),
                    Tipo = table.Column<string>(maxLength: 80, nullable: false),
                    Valor = table.Column<string>(nullable: true),
                    Parametros = table.Column<string>(nullable: true),
                    CriadoPorId = table.Column<string>(nullable: false),
                    DataCadastro = table.Column<DateTime>(nullable: false),
                    AlteradoPorId = table.Column<string>(nullable: true),
                    DataAlteracao = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Configuracao", x => new { x.Grupo, x.Chave });
                    table.ForeignKey(
                        name: "FK_Configuracao_AspNetUsers_AlteradoPorId",
                        column: x => x.AlteradoPorId,
                        principalSchema: "dbo",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Configuracao_AspNetUsers_CriadoPorId",
                        column: x => x.CriadoPorId,
                        principalSchema: "dbo",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Discriminator", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "10000", "00000000-0000-0000-0000-000000000000", "Perfil", "Administrador", "ADMINISTRADOR" },
                    { "20000", "00000000-0000-0000-0000-000000000000", "Perfil", "Cliente", "CLIENTE" },
                    { "99999", "00000000-0000-0000-0000-000000000000", "Perfil", "Sistema", "SISTEMA" }
                });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "AspNetUserStatus",
                columns: new[] { "Id", "Nome" },
                values: new object[,]
                {
                    { 1, "Pendente" },
                    { 2, "Ativo" },
                    { 3, "Inativo" }
                });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "OperacaoGrupo",
                columns: new[] { "Id", "Nome" },
                values: new object[] { 90000000, "TRATAMENTO MANUAL" });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "Participante",
                columns: new[] { "Id", "Ativo", "Email", "Nome" },
                values: new object[,]
                {
                    { 1, false, "participante1@email.com.br", "Participante 1" },
                    { 2, false, "participante2@email.com.br", "Participante 2" }
                });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "Name", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "StatusId", "Surname", "TwoFactorEnabled", "UserName" },
                values: new object[] { "00000000-0000-0000-0000-000000000000", 0, "00000000-0000-0000-0000-000000000000", "no-reply@email.com.br", true, false, null, "ADMINISTRADOR", "NO-REPLY@EMAIL.COM.BR", "ADMIN", "AQAAAAEAACcQAAAAECHm/aaR3zSYyetFti7SpvwpQb64XvRKd9lKSGjWKZRy3KJlIz7srfbxTWrbpaabeQ==", null, false, "00000000-0000-0000-0000-000000000000", 2, null, false, "admin" });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "Operacao",
                columns: new[] { "Id", "Nome", "OperacaoGrupoId" },
                values: new object[] { 90010000, "TRATAMENTO MANUAL", 90000000 });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "AspNetUserRoles",
                columns: new[] { "UserId", "RoleId" },
                values: new object[] { "00000000-0000-0000-0000-000000000000", "99999" });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "Configuracao",
                columns: new[] { "Grupo", "Chave", "AlteradoPorId", "CriadoPorId", "DataAlteracao", "DataCadastro", "Descricao", "Parametros", "Tipo", "Valor" },
                values: new object[] { "identityServer", "identityServer:configuration", null, "00000000-0000-0000-0000-000000000000", null, new DateTime(2020, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Parâmetros de configuração do serviço de autorização.", "<IdentityServerConfig xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.datacontract.org/2004/07/IAtecAgenda.Domain.Infrastructure\"><Authority>https://localhost:5001</Authority><Clients><IdentityServerClientConfig><AccessTokenLifetime>3600</AccessTokenLifetime><ClientId>frontend.app</ClientId><ClientSecret>agenda</ClientSecret></IdentityServerClientConfig></Clients></IdentityServerConfig>", "string", null });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                schema: "dbo",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                schema: "dbo",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                schema: "dbo",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                schema: "dbo",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                schema: "dbo",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                schema: "dbo",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                schema: "dbo",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_StatusId",
                schema: "dbo",
                table: "AspNetUsers",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Configuracao_AlteradoPorId",
                schema: "dbo",
                table: "Configuracao",
                column: "AlteradoPorId");

            migrationBuilder.CreateIndex(
                name: "IX_Configuracao_CriadoPorId",
                schema: "dbo",
                table: "Configuracao",
                column: "CriadoPorId");

            migrationBuilder.CreateIndex(
                name: "IX_EventoParticipante_ParticipanteId",
                schema: "dbo",
                table: "EventoParticipante",
                column: "ParticipanteId");

            migrationBuilder.CreateIndex(
                name: "IX_Operacao_OperacaoGrupoId",
                schema: "dbo",
                table: "Operacao",
                column: "OperacaoGrupoId");

            migrationBuilder.CreateIndex(
                name: "IX_PerfilModulo_ModuloId",
                schema: "dbo",
                table: "PerfilModulo",
                column: "ModuloId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "Configuracao",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "EventoParticipante",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "Operacao",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "PerfilModulo",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "AspNetUsers",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "Evento",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "Participante",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "OperacaoGrupo",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "Modulo",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "AspNetRoles",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "AspNetUserStatus",
                schema: "dbo");
        }
    }
}
