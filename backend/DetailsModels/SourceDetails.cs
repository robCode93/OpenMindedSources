using backend.Models;

namespace backend.DetailsModels
{
    public class SourceDetails
    {
        public Guid? Id { get; set; }
        public Guid? PersonId { get; set; }
        public Guid? SourceCategoryId { get; set; }
        public Guid? FileReferenceId { get; set; }
        public Guid? SubCategoryId { get; set; }
        public Guid? ThumbnailId { get; set; }
        public string? DownloadUrl { get; set; }
        public string? Name { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public DateTime? DateOfCreation { get; set; }
        public DateTime? DateOfDatabaseEntry { get; set; }
        public FileReferenceDetails? FileReference { get; set; }
        public FileReferenceDetails? Thumbnail { get; set; }
        public SourceCategoryDetails? SourceCategory { get; set; }  
        public SubCategoryDetails? SubCategory { get; set; }
        public PersonDetails? Person { get; set; }
    }
}
