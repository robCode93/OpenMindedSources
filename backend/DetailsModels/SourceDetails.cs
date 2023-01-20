using backend.Models;

namespace backend.DetailsModels
{
    public class SourceDetails
    {
        public Guid? Id { get; set; }
        public Guid? PersonId { get; set; }
        public Guid? SourceCategoryId { get; set; }
        public string? Name { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public DateTime? DateOfCreation { get; set; }
        public DateTime? DateOfDatabaseEntry { get; set; }
        public FileReferenceDetails? FileReference { get; set; }
        public FileReferenceDetails? Thumbnail { get; set; }
    }
}
