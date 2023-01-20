using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Source
    {
        [Key]
        public Guid Id { get; set; }
        public Guid PersonId { get; set; }
        public Guid SourceCategoryId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime DateOfCreation { get; set; }
        public DateTime DateOfDatabaseEntry { get; set; }
        public FileReference? FileReference { get; set; }
        public FileReference? Thumbnail { get; set; }
    }
}
