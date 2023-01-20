using backend.Models;

namespace backend.CRUDModels
{
    public class UpdateSourceModel
    {
        public Guid? PersonId { get; set; }
        public Guid? SourceCategoryId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public DateTime? DateOfCreation { get; set; }
        public DateTime? DateOfDatabaseEntry { get; set; }
        public Guid? ThumbnailId { get; set; }
    }
}
