using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IAtecAgenda.Core.Migrations
{
    public partial class Operacao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Data",
                schema: "dbo",
                table: "Operacao",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Descricao",
                schema: "dbo",
                table: "Operacao",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Local",
                schema: "dbo",
                table: "Operacao",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TipoEvento",
                schema: "dbo",
                table: "Operacao",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "00000000-0000-0000-0000-000000000000",
                column: "PasswordHash",
                value: "AQAAAAEAACcQAAAAEDN4gQ9+Oki0K8S57RZK+cMz1b2PyL9i6sf6v+rP4D9oT6LX8DZYo6iUxrWSGG/uHA==");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Data",
                schema: "dbo",
                table: "Operacao");

            migrationBuilder.DropColumn(
                name: "Descricao",
                schema: "dbo",
                table: "Operacao");

            migrationBuilder.DropColumn(
                name: "Local",
                schema: "dbo",
                table: "Operacao");

            migrationBuilder.DropColumn(
                name: "TipoEvento",
                schema: "dbo",
                table: "Operacao");

            migrationBuilder.UpdateData(
                schema: "dbo",
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "00000000-0000-0000-0000-000000000000",
                column: "PasswordHash",
                value: "AQAAAAEAACcQAAAAECHm/aaR3zSYyetFti7SpvwpQb64XvRKd9lKSGjWKZRy3KJlIz7srfbxTWrbpaabeQ==");
        }
    }
}
