using backend.Models;
using System.ComponentModel.DataAnnotations;

namespace backend.CRUDModels
{
    public class CreateSourceCategoryModel
    {
        [Required]
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? IconName { get; set; }
        public string? HexColor { get; set; }
    }
}
