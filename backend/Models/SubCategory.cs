using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class SubCategory
    {
        [Key]
        public Guid Id { get; set; }
        public Guid SourceCategoryId { get; set; }
        public string Name { get; set;} = string.Empty;
        public string? Description { get; set;}
    }
}
