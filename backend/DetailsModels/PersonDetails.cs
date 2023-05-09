using backend.Models;

namespace backend.DetailsModels
{
    public class PersonDetails
    {
        public Guid? Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? ThumbnailDownloadUrl { get; set; }
        public DateTime? BirthDate { get; set; }
        public DateTime? DeathDate { get; set; }
        public string? Nationality { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public IList<SourceDetails>? Sources { get; set; }
        public FileReferenceDetails? Thumbnail { get; set; }
        public Guid? ThumbnailId { get; set; }
        public bool GenderMan { get; set; }
        public bool GenderWomen { get; set; }
    }
}
