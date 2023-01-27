using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FileReferences",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DownloadUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MimeType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileSizeInBytes = table.Column<long>(type: "bigint", nullable: true),
                    OnSource = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    OnPerson = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileReferences", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SourceCategories",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IconName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HexColor = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SourceCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Persons",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ThumbnailId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BirthDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeathDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Nationality = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persons", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Persons_FileReferences_ThumbnailId",
                        column: x => x.ThumbnailId,
                        principalTable: "FileReferences",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "SubCategories",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SourceCategoryId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubCategories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SubCategories_SourceCategories_SourceCategoryId",
                        column: x => x.SourceCategoryId,
                        principalTable: "SourceCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Sources",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PersonId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    SourceCategoryId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    SubCategoryId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ThumbnailId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    FileReferenceId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateOfCreation = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateOfDatabaseEntry = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sources", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sources_FileReferences_FileReferenceId",
                        column: x => x.FileReferenceId,
                        principalTable: "FileReferences",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Sources_FileReferences_ThumbnailId",
                        column: x => x.ThumbnailId,
                        principalTable: "FileReferences",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Sources_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Sources_SourceCategories_SourceCategoryId",
                        column: x => x.SourceCategoryId,
                        principalTable: "SourceCategories",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Sources_SubCategories_SubCategoryId",
                        column: x => x.SubCategoryId,
                        principalTable: "SubCategories",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Persons_ThumbnailId",
                table: "Persons",
                column: "ThumbnailId");

            migrationBuilder.CreateIndex(
                name: "IX_Sources_FileReferenceId",
                table: "Sources",
                column: "FileReferenceId");

            migrationBuilder.CreateIndex(
                name: "IX_Sources_PersonId",
                table: "Sources",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_Sources_SourceCategoryId",
                table: "Sources",
                column: "SourceCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Sources_SubCategoryId",
                table: "Sources",
                column: "SubCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Sources_ThumbnailId",
                table: "Sources",
                column: "ThumbnailId");

            migrationBuilder.CreateIndex(
                name: "IX_SubCategories_SourceCategoryId",
                table: "SubCategories",
                column: "SourceCategoryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sources");

            migrationBuilder.DropTable(
                name: "Persons");

            migrationBuilder.DropTable(
                name: "SubCategories");

            migrationBuilder.DropTable(
                name: "FileReferences");

            migrationBuilder.DropTable(
                name: "SourceCategories");
        }
    }
}
