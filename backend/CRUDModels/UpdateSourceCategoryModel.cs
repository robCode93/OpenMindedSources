using backend.Models;

namespace backend.CRUDModels
{
    public class UpdateSourceCategoryModel
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? IconName { get; set; }
        public string? HexColor { get; set; }
        public IList<Guid> SourcIds { get; set; }
    }
}
