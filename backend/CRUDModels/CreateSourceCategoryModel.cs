using backend.Models;

namespace backend.CRUDModels
{
    public class CreateSourceCategoryModel
    {
        public string? Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? IconName { get; set; }
        public string? HexColor { get; set; }
        public IList<Guid>? SourceIds { get; set; }
    }
}
