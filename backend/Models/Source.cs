﻿using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Source
    {
        [Key]
        public Guid Id { get; set; }
        public Guid? PersonId { get; set; }
        public Guid? SourceCategoryId { get; set; }
        public Guid? SubCategoryId { get; set; }
        public Guid? ThumbnailId { get; set; }
        public Guid? FileReferenceId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime DateOfCreation { get; set; }
        public DateTime DateOfDatabaseEntry { get; set; }
        public FileReference? FileReference { get; set; }
        public FileReference? Thumbnail { get; set; }
        public SourceCategory? SourceCategory { get; set; }
        public SubCategory? SubCategory { get; set; }
        public Person? Person { get; set; }
    }
}
