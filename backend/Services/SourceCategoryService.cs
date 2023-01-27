using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;
using backend.ServiceInterfaces;

namespace backend.Services
{
    public class SourceCategoryService : ISourceCategoryService
    {
        private readonly OpenMindServerContext _context;

        public SourceCategoryService(OpenMindServerContext context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<SourceCategoryDetails> GetAllSourceCategories()
        {
            throw new NotImplementedException();
        }

        public SourceCategoryDetails GetSourceCategoryById(Guid Id)
        {
            throw new NotImplementedException();
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateSourceCategory(CreateSourceCategoryModel createModel)
        {
            throw new NotImplementedException();
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateSourceCategory(Guid Id, UpdateSourceCategoryModel updateModel)
        {
            throw new NotImplementedException();
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteSourceCategory(Guid Id)
        {
            throw new NotImplementedException();
        }

        // ########## HELPERS ##########
        private SourceCategoryDetails? ConvertModelToDetailsModel(SourceCategory sourceCategory)
        {
            if (sourceCategory == null)
            {
                return null;
            }

            SourceCategoryDetails details = new SourceCategoryDetails();
            details.Id = sourceCategory.Id;
            details.IconName = sourceCategory.IconName;
            details.Name = sourceCategory.Name;
            details.Description = sourceCategory.Description;
            details.HexColor = sourceCategory.HexColor;

            details.SubCategories = new List<SubCategoryDetails>();
            foreach(var category in sourceCategory.SubCategories)
            {
                SubCategoryDetails subCategory = new SubCategoryDetails();
                subCategory.Id = category.Id;
                subCategory.SourceCategoryId = category.SourceCategoryId;
                subCategory.Description = category.Description;
                subCategory.Name = category.Name;

                details.SubCategories.Add(subCategory);
            }

            return details;
        }
    }
}
