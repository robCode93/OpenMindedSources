using backend.Models;

namespace backend.DetailsModels
{
    public class SourceCategoryDetails
    {
        public Guid? Id { get; set; }
        public string? Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? IconName { get; set; }
        public string? HexColor { get; set; }
        public IList<SubCategoryDetails>? SubCategories { get; set; }
    }
}
