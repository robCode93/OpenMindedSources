using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class OpenMindServerContext : DbContext
    {
        public OpenMindServerContext(DbContextOptions options) : base(options) { }

        public DbSet<Person> Persons { get; set; }
        public DbSet<Source> Sources { get; set; }  
        public DbSet<SourceCategory> SourceCategories { get; set; }
        public DbSet<FileReference> FileReferences { get; set; }    
    }
}
