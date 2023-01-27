using System.ComponentModel.DataAnnotations;

namespace backend.CRUDModels
{
    public class CreateSubCategoryModel
    {
        [Required]
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
    }
}
