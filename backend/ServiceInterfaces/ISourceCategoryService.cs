using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;

namespace backend.ServiceInterfaces
{
    public interface ISourceCategoryService
    {
        // ########## GET-Methoden ##########
        public List<SourceCategoryDetails> GetAllSourceCategories();
        public SourceCategoryDetails GetSourceCategoryById(Guid id);

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateSourceCategory(CreateSourceCategoryModel createModel);

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateSourceCategory(Guid id, UpdateSourceCategoryModel updateModel);

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteSourceCategory(Guid id);
    }
}
