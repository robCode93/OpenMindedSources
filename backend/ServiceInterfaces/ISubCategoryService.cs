﻿using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;

namespace backend.ServiceInterfaces
{
    public interface ISubCategoryService
    {
        // ########## GET-Methoden ##########
        public List<SubCategoryDetails> GetAllSubCategories();
        public List<SubCategoryDetails> GetSubCategoriesBySourceCategory(Guid id);
        public SubCategoryDetails GetSubCategoryById(Guid id);

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateSubCategoryModel(Guid sourceCategoryId, CreateSubCategoryModel createModel);

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateSubCategory(Guid id, UpdateSubCategoryModel updateModel);

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteSubCategory(Guid id);
    }
}
