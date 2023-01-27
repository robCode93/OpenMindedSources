using backend.Models;

namespace backend.CRUDModels
{
    public class CreatePersonModel
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;

        public DateTime? BirthDate { get; set; }
        public DateTime? DeathDate { get; set; }
        public string? Nationality { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public List<Guid>? SourceIds { get; set; }
        public Guid? ThumbnailId { get; set; }
    }
}
