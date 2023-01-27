using backend.Models;
using System.ComponentModel.DataAnnotations;

namespace backend.CRUDModels
{
    public class CreateSourceModel
    {
        [Required]
        public string Name { get; set; }

        public Guid? PersonId { get; set; }
        public Guid? SourceCategoryId { get; set; }
        public Guid? SubCategoryId { get; set; }
        public Guid? FileReferenceId { get; set; }
        public Guid? ThumbnailId { get; set; }
        public string? Description { get; set; }
        public DateTime DateOfCreation { get; set; }
    }
}
