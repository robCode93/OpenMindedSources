using backend.Models;

namespace backend.DetailsModels
{
    public class PersonDetails
    {
        public Guid? Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public DateTime? BirthDate { get; set; }
        public string? Nationality { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        IList<SourceDetails>? Sources { get; set; }
    }
}
