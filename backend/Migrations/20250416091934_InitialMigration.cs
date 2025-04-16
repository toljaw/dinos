using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Dinos",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    ErstesAufkommen = table.Column<decimal>(type: "decimal(9,2)", nullable: false),
                    KoerperLaenge = table.Column<decimal>(type: "decimal(9,2)", nullable: false),
                    KoerperHoehe = table.Column<decimal>(type: "decimal(9,2)", nullable: false),
                    SchaedelLaenge = table.Column<decimal>(type: "decimal(9,2)", nullable: false),
                    Gewicht = table.Column<decimal>(type: "decimal(9,2)", nullable: false),
                    Spiel = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dinos", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Dinos");
        }
    }
}
