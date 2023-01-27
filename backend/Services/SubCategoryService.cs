using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;
using backend.ServiceInterfaces;

namespace backend.Services
{
    public class SubCategoryService : ISubCategoryService
    {
        private readonly OpenMindServerContext _context;

        public SubCategoryService(OpenMindServerContext context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<SubCategoryDetails> GetSubCategories()
        {
            throw new NotImplementedException();
        }

        public List<SubCategoryDetails> GetSubCategoriesBySourceCategory(Guid id)
        {
            throw new NotImplementedException();
        }

        public SubCategoryDetails GetSubCategoryById(Guid id)
        {
            throw new NotImplementedException();
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateSubCategoryModel(Guid sourceCategoryId, CreateSubCategoryModel createModel)
        {
            throw new NotImplementedException();
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateSubCategory(Guid id)
        {
            throw new NotImplementedException();
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteSubCategory(Guid id)
        {
            throw new NotImplementedException();
        }

        // ########## HELPERS ##########
        private SubCategoryDetails? ConvertModelToDetailsModel(SubCategory subCategory)
        {
            if(subCategory == null) return null;

            SubCategoryDetails details = new SubCategoryDetails();
            details.Id = subCategory.Id;
            details.SourceCategoryId = subCategory.SourceCategoryId;
            details.Description = subCategory.Description;
            details.Name = subCategory.Name;

            return details;
        }
    }
}
