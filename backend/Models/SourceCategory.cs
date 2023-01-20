using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class SourceCategory
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? IconName { get; set; }
        public string? HexColor { get; set; }
        public IList<Source> Sources { get; set; } = new List<Source>();    
    }
}
