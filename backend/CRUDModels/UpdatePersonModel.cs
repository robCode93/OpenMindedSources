namespace backend.CRUDModels
{
    public class UpdatePersonModel
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public DateTime? BirthDate { get; set; }
        public string? Nationality { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
    }
}
