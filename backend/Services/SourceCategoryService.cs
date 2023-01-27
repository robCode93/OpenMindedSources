using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;
using backend.ServiceInterfaces;
using Microsoft.EntityFrameworkCore;

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
            List<SourceCategoryDetails> detailsList = new List<SourceCategoryDetails>();
            var categories = _context.SourceCategories.Include(c => c.SubCategories).ToList();

            foreach ( var category in categories)
            {
                detailsList.Add(ConvertModelToDetailsModel(category));
            }

            detailsList.RemoveAll(i => i == null);
            return detailsList;
        }

        public SourceCategoryDetails? GetSourceCategoryById(Guid id)
        {
            return ConvertModelToDetailsModel(_context.SourceCategories.Include(c => c.SubCategories).FirstOrDefault(c => c.Id == id));
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateSourceCategory(CreateSourceCategoryModel createModel)
        {
            ResponseModel model = new ResponseModel();

            if(_context.SourceCategories.Any(c => c.Name == createModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "Name for Sourcecategory is already taken";
                return model;
            }

            SourceCategory category = new SourceCategory();
            category.Name = createModel.Name;
            category.Description = createModel.Description;
            category.IconName = createModel.IconName;
            category.HexColor = createModel.HexColor;

            _context.SourceCategories.Add(category);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Sourcecategory successfully created";
            return model;
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateSourceCategory(Guid id, UpdateSourceCategoryModel updateModel)
        {
            ResponseModel model = new ResponseModel();
            var category = _context.SourceCategories.Include(c => c.SubCategories).FirstOrDefault(c => c.Id == id);

            if(category is null)
            {
                model.IsSuccess = false;
                model.Message = "Sourcecategory not found";
                return model;
            }

            if(updateModel.Name is not null && _context.SourceCategories.Any(c => c.Name == updateModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "New Name for Sourcecategory is already taken";
                return model;
            }

            if(updateModel.Name is not null && _context.SourceCategories.Any(c => c.Name == updateModel.Name) is false)
            {
                category.Name = updateModel.Name;
            }

            category.HexColor = updateModel.HexColor;
            category.Description = updateModel.Description;
            category.IconName = updateModel.IconName;

            _context.SourceCategories.Update(category);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Sourcecategory successfully updated";
            return model;
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteSourceCategory(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var category = _context.SourceCategories.Include(c => c.SubCategories).FirstOrDefault(c => c.Id == id);

            if(category is null)
            {
                model.IsSuccess = false;
                model.Message = "SourceCategory not found in database";
                return model;
            }

            if (category.SubCategories.Any())
            {
                model.IsSuccess = false;
                model.Message = "Sourcecategory cannot be deleted if it contains subcategories";
                return model;
            }

            _context.SourceCategories.Remove(category);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Sourcecategory successfully deleted";
            return model;
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
