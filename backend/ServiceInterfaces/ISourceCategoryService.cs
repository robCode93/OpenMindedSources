using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;

namespace backend.ServiceInterfaces
{
    public interface ISourceCategoryService
    {
        // ########## GET-Methoden ##########
        public List<SourceCategoryDetails> GetAllSourceCategories();
        public SourceCategoryDetails GetSourceCategoryById(Guid Id);
        public List<SourceCategoryDetails> GetSourceCategoriesByName(string searchText);

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateSourceCategory(CreateSourceCategoryModel createModel);

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateSourceCategory(Guid Id, UpdateSourceCategoryModel updateModel);
        public ResponseModel AddSourceToCategory(Guid sourceId, Guid categoryId);

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteSourceCategory(Guid Id);
    }
}
