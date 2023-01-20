using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;
using backend.ServiceInterfaces;

namespace backend.Services
{
    public class PersonService : IPersonService
    {
        OpenMindServerContext _context;

        public PersonService(OpenMindServerContext context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<PersonDetails> GetAllPersons()
        {
            throw new NotImplementedException();
        }

        public PersonDetails GetPersonById(Guid Id)
        {
            throw new NotImplementedException();
        }

        public List<PersonDetails> GetPersonsByName(string searchText)
        {
            throw new NotImplementedException();
        }

        public List<PersonDetails> GetPersonsByTimeSpan(DateTime startDate, DateTime endDate)
        {
            throw new NotImplementedException();
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreatePerson(CreatePersonModel createModel)
        {
            throw new NotImplementedException();
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel AddSourceToPerson(Guid sourceId, Guid personId)
        {
            throw new NotImplementedException();
        }

        public ResponseModel UpdatePerson(UpdatePersonModel updateModel)
        {
            throw new NotImplementedException();
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeletePerson(Guid id)
        {
            throw new NotImplementedException();
        }

        // ########## HELPERS ##########
        private PersonDetails? ConvertModelToDetailsModel(Person person)
        {
            if(person is null)
            {
                return null;
            }

            PersonDetails details = new PersonDetails();
            details.Id = person.Id;
            details.FirstName = person.FirstName;
            details.LastName = person.LastName;
            details.Description = person.Description;   
            details.Nationality = person.Nationality;
            details.Title = person.Title;
            details.BirthDate = person.BirthDate;
            
            foreach( var source in person.Sources)
            {
                /// TODO
            }
        }
    }
}
