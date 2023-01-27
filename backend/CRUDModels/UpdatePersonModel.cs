namespace backend.CRUDModels
{
    public class UpdatePersonModel
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public DateTime? BirthDate { get; set; }
        public DateTime? DeathDate { get; set; }
        public string? Nationality { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public Guid? ThumbnailId { get; set; }
        public List<Guid>? SourceIds { get; set; }
    }
}
