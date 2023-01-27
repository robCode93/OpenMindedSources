using backend.CRUDModels;
using backend.DetailsModels;
using backend.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubCategoryController : ControllerBase
    {
        ISubCategoryService _subCategoryService;

        public SubCategoryController(ISubCategoryService subCategoryService)
        {
            _subCategoryService = subCategoryService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SubCategoryDetails[]))]
        public IActionResult GetAllSubCategories()
        {
            try
            {
                var model = _subCategoryService.GetAllSubCategories();
                return Ok(model);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SubCategoryDetails[]))]
        public IActionResult GetSubCategoriesBySourcecategory([FromRoute] Guid id)
        {
            try
            {
                var model = _subCategoryService.GetSubCategoriesBySourceCategory(id);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SubCategoryDetails))]
        public IActionResult GetSubCategoryById([FromRoute] Guid id)
        {
            try
            {
                var model = _subCategoryService.GetSubCategoryById(id); 
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // ########## CREATE-Methoden ##########
        [HttpPost]
        [Route("{id}/[action]")]
        public IActionResult CreateSubCategory([FromRoute] Guid id, CreateSubCategoryModel createModel)
        {
            try
            {
                var model = _subCategoryService.CreateSubCategoryModel(id, createModel);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // ########## UPDATE-Methoden ##########
        [HttpPatch]
        [Route("{id}/[action]")]
        public IActionResult UpdateSubCategory([FromRoute] Guid id, UpdateSubCategoryModel updateModel)
        {
            try
            {
                var model = _subCategoryService.UpdateSubCategory(id, updateModel);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // ########## DELETE-Methoden ##########
        [HttpDelete]
        [Route("{id}/[action]")]
        public IActionResult DeleteSubCategory([FromRoute] Guid id)
        {
            try
            {
                var model = _subCategoryService.DeleteSubCategory(id);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
