using backend.CRUDModels;
using backend.DetailsModels;
using backend.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SourceCategoryController : ControllerBase
    {
        ISourceCategoryService _sourceCategoryService;

        public SourceCategoryController(ISourceCategoryService sourceCategoryService)
        {
            _sourceCategoryService = sourceCategoryService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SourceCategoryDetails[]))]
        public IActionResult GetAllSourceCategories()
        {
            try
            {
                var model = _sourceCategoryService.GetAllSourceCategories();
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SourceCategoryDetails))]
        public IActionResult GetSourceCategoryById([FromRoute] Guid id)
        {
            try
            {
                var model = _sourceCategoryService.GetSourceCategoryById(id);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // ########## CREATE-Methoden ##########
        [HttpPost]
        [Route("[action]")]
        public IActionResult CreateSourceCategory(CreateSourceCategoryModel createModel)
        {
            try
            {
                var model = _sourceCategoryService.CreateSourceCategory(createModel);
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
        public IActionResult UpdateSourceCategory([FromRoute] Guid id, UpdateSourceCategoryModel updateModel)
        {
            try
            {
                var model = _sourceCategoryService.UpdateSourceCategory(id, updateModel);
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
        public IActionResult DeleteSourceCategory([FromRoute] Guid id)
        {
            try
            {
                var model = _sourceCategoryService.DeleteSourceCategory(id);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
