using Azure;
using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;
using backend.ServiceInterfaces;
using Microsoft.EntityFrameworkCore;

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
        public List<SubCategoryDetails> GetAllSubCategories()
        {
            List<SubCategoryDetails> detailsList = new List<SubCategoryDetails>();
            var subs = _context.SubCategories.ToList();

            foreach (var subCategory in subs)
            {
                detailsList.Add(ConvertModelToDetailsModel(subCategory));   
            }

            detailsList.RemoveAll(s => s == null);
            return detailsList;
        }

        public List<SubCategoryDetails> GetSubCategoriesBySourceCategory(Guid id)
        {
            List<SubCategoryDetails> detailsList = new List<SubCategoryDetails>();
            var subs = _context.SubCategories.Where(s => s.SourceCategoryId == id).ToList();

            foreach (var subCategory in subs)
            {
                detailsList.Add(ConvertModelToDetailsModel(subCategory));
            }

            detailsList.RemoveAll(s => s == null);
            return detailsList;
        }

        public SubCategoryDetails? GetSubCategoryById(Guid id)
        {
            return ConvertModelToDetailsModel(_context.SubCategories.FirstOrDefault(s => s.Id == id));
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateSubCategoryModel(Guid sourceCategoryId, CreateSubCategoryModel createModel)
        {
            ResponseModel model = new ResponseModel();
            var category = _context.SourceCategories.Include(c => c.SubCategories).FirstOrDefault(c => c.Id == sourceCategoryId);

            if(category is null)
            {
                model.IsSuccess = false;
                model.Message = "Sourcecategory not found";
                return model;
            }

            if(category.SubCategories.Any(s => s.Name == createModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "Name for new subcategory is already taken";
                return model;
            }

            SubCategory sub = new SubCategory();
            sub.Name = createModel.Name;
            sub.Description = createModel.Description;
            sub.SourceCategoryId= sourceCategoryId;

            category.SubCategories.Add(sub);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Subcategory for Sourcecategory successfully created";
            return model;
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateSubCategory(Guid id, UpdateSubCategoryModel updateModel)
        {
            ResponseModel model = new ResponseModel();
            var sub = _context.SubCategories.FirstOrDefault(s => s.Id == id);

            if(sub is null)
            {
                model.IsSuccess = false;
                model.Message = "Subcategory not found";
                return model;
            }

            var cat = _context.SourceCategories.Include(c => c.SubCategories).FirstOrDefault(c => c.Id == sub.SourceCategoryId);

            if (cat.SubCategories.Any(s => s.Name == updateModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "New name for subcategory is already taken in sour´cecategory";
                return model;
            }

            sub.Name = updateModel.Name;
            sub.Description = updateModel.Description;

            _context.SubCategories.Update(sub);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Subcategory successfully updated";
            return model;
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteSubCategory(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var sub = _context.SubCategories.FirstOrDefault(s => s.Id == id);

            if(sub is null)
            {
                model.IsSuccess = false;
                model.Message = "Subcategory not found";
                return model;
            }

            _context.SubCategories.Remove(sub);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Subcategory successfully deleted";
            return model;
        }

        // ########## HELPERS ##########
        private SubCategoryDetails? ConvertModelToDetailsModel(SubCategory subCategory)
        {
            if(subCategory == null)
            {
                return null;
            }

            SubCategoryDetails details = new SubCategoryDetails();
            details.Id = subCategory.Id;
            details.SourceCategoryId = subCategory.SourceCategoryId;
            details.Description = subCategory.Description;
            details.Name = subCategory.Name;

            return details;
        }
    }
}
