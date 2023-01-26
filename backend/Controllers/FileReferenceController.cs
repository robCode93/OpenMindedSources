using backend.CRUDModels;
using backend.DetailsModels;
using backend.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileReferenceController : ControllerBase
    {
        IFileReferenceService _fileReferenceService;

        public FileReferenceController(IFileReferenceService fileReferenceService)
        {
            _fileReferenceService = fileReferenceService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(FileReferenceDetails[]))]
        public IActionResult GetAllFileReferences()
        {
            try
            {
                var model = _fileReferenceService.GetAllFileReferences();
                return Ok(model);   
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(FileReferenceDetails))]
        public IActionResult GetFileReferenceById([FromRoute] Guid id)
        {
            try
            {
                var model = _fileReferenceService.GetFileReferenceById(id);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        public async Task<IActionResult> DownloadFileFromDatabase([FromRoute] Guid id)
        {
            try
            {
                var model = _fileReferenceService.GetFileReferenceById(id);
                var provider = new FileExtensionContentTypeProvider();

                if (!provider.TryGetContentType(model.FileName, out var contentType))
                {
                    contentType = "application/octet-stream";
                }

                var bytes = await System.IO.File.ReadAllBytesAsync(model.FileName);
                return File(bytes, contentType, Path.GetFileName(model.FileName));

            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // ########## CREATE-Methoden ##########
        [HttpPost]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(FileReferenceDetails))]
        public IActionResult UploadFileToDatabase(IFormFile file, CreateFileReferenceModel createModel)
        {
            try
            {
                //using var ms = new MemoryStream();
                var mimeType = file.ContentType;

                //file.CopyTo(ms);

                //ms.Seek(0, SeekOrigin.Begin);
                //ms.Position = 0;

                var model = _fileReferenceService.UploadFileToDatabase(file.OpenReadStream(), mimeType, createModel);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // ########## DELETE-Methoden ##########
    }
}
