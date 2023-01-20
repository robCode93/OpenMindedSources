using backend.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
        // ########## CREATE-Methoden ##########
        // ########## DELETE-Methoden ##########
    }
}
