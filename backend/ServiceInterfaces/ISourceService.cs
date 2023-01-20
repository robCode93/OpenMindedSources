using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;

namespace backend.ServiceInterfaces
{
    public interface ISourceService
    {
        // ########## GET-Methoden ##########
        public List<SourceDetails> GetAllSources();
        public SourceDetails GetSourceById(Guid id);
        public List<SourceDetails> GetSourcesByName(string searchText);
        public List<SourceDetails> GetSourcesByDate(DateTime date);
        public List<SourceDetails> GetSourcesByTimeSpan(DateTime startDate, DateTime endDate);
        public List<SourceDetails> GetSourcesByPerson(Guid personId);

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateSource(CreateSourceModel createModel);

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateSource(Guid Id, UpdateSourceModel updateModel);

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteSource(Guid Id);
    }
}
