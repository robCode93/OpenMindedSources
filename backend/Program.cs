using backend.Models;
using backend.ServiceInterfaces;
using backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<OpenMindServerContext>(x => x.UseSqlServer(builder.Configuration.GetConnectionString("OpenMindConnection")));

builder.Services.AddScoped<IFileReferenceService, FileReferenceService>();
builder.Services.AddScoped<IPersonService, PersonService>();
builder.Services.AddScoped<ISourceCategoryService, SourceCategoryService>();
builder.Services.AddScoped<ISourceService, SourceService>();
builder.Services.AddScoped<ISubCategoryService, SubCategoryService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(c => c.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().Build());
}

app.UseAuthorization();

app.MapControllers();

app.Run();
