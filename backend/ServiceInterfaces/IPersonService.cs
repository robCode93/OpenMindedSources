using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;

namespace backend.ServiceInterfaces
{
    public interface IPersonService
    {
        // ########## GET-Methoden ##########
        public List<PersonDetails> GetAllPersons();
        public PersonDetails GetPersonById(Guid Id);
        public List<PersonDetails> GetPersonsByTimeSpan(DateTime startDate, DateTime endDate);

        // ########## CREATE-Methoden ##########
        public ResponseModel CreatePerson(CreatePersonModel createModel);

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdatePerson(UpdatePersonModel updateModel);
        public ResponseModel AddSourceToPerson(Guid sourceId, Guid personId);

        // ########## DELETE-Methoden ##########
        public ResponseModel DeletePerson(Guid id);
    }
}
