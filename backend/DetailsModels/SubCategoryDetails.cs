namespace backend.DetailsModels
{
    public class SubCategoryDetails
    {
        public Guid? Id { get; set; }
        public Guid? SourceCategoryId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
    }
}
