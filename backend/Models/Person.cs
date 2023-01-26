using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Person
    {
        [Key]
        public Guid Id { get; set; }
        public Guid? ThumbnailId { get; set; }  
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;

        public DateTime? BirthDate { get; set; }
        public DateTime? DeathDate { get; set; }
        public string? Nationality { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public IList<Source> Sources { get; set; } = new List<Source>();
        public FileReference? Thumbnail { get; set; }
    }
}
