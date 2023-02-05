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
        public List<SourceDetails> GetSourcesByTimeSpan(DateTime startDate, DateTime endDate);

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateSource(Guid id, CreateSourceModel createModel);

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateSource(Guid id, UpdateSourceModel updateModel);

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteSource(Guid Id);
    }
}
