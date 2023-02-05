using backend.CRUDModels;
using backend.DetailsModels;
using backend.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SourceController : ControllerBase
    {
        ISourceService _sourceService;

        public SourceController(ISourceService sourceService)
        {
            _sourceService = sourceService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SourceDetails[]))]
        public IActionResult GetAllSources()
        {
            try
            {
                var model = _sourceService.GetAllSources();

                foreach(var source in model)
                {
                    if (source.ThumbnailId is not null)
                    {
                        source.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                        {
                            id = source.ThumbnailId.Value,
                        });
                    }

                    if (source.FileReferenceId is not null)
                    {
                        source.FileDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                        {
                            id = source.FileReferenceId.Value,
                        });
                    }
                }

                return Ok(model);
            }
            catch(Exception ex) 
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SourceDetails))]
        public IActionResult GetSourceById([FromRoute] Guid id)
        {
            try
            {
                var model = _sourceService.GetSourceById(id);

                if (model.ThumbnailId is not null)
                {
                    model.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                    {
                        id = model.ThumbnailId.Value,
                    });
                }

                if (model.FileReferenceId is not null)
                {
                    model.FileDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                    {
                        id = model.FileReferenceId.Value,
                    });
                }

                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{startDate}/[action]/{endDate}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SourceDetails[]))]
        public IActionResult GetSourcesByTimeSpan([FromRoute] DateTime startDate, [FromRoute] DateTime endDate)
        {
            try
            {
                var model = _sourceService.GetSourcesByTimeSpan(startDate, endDate);

                foreach (var source in model)
                {
                    if (source.ThumbnailId is not null)
                    {
                        source.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                        {
                            id = source.ThumbnailId.Value,
                        });
                    }

                    if (source.FileReferenceId is not null)
                    {
                        source.FileDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                        {
                            id = source.FileReferenceId.Value,
                        });
                    }
                }

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
        public IActionResult CreateSource([FromRoute] Guid id, CreateSourceModel createModel)
        {
            try
            {
                var model = _sourceService.CreateSource(id, createModel);
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
        public IActionResult UpdateSource([FromRoute] Guid id, UpdateSourceModel updateModel)
        {
            try
            {
                var model = _sourceService.UpdateSource(id, updateModel);
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
        public IActionResult DeleteSource([FromRoute] Guid id)
        {
            try
            {
                var model = _sourceService.DeleteSource(id);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
