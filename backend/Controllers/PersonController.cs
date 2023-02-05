using backend.CRUDModels;
using backend.DetailsModels;
using backend.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        IPersonService _personService;

        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        // ########## GET-Methoden ##########
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PersonDetails[]))]
        public IActionResult GetAllPersons()
        {
            try
            {
                var model = _personService.GetAllPersons();

                foreach(var person in model)
                {
                    if (person.ThumbnailId is not null)
                    {
                        person.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                        {
                            id = person.ThumbnailId.Value,
                        });
                    }
                }

                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("{startDate}/[action]/{endDate}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PersonDetails[]))]
        public IActionResult GetPersonsByTimeSpan([FromRoute] DateTime startDate, [FromRoute] DateTime endDate)
        {
            try
            {
                var model = _personService.GetPersonsByTimeSpan(startDate, endDate);

                foreach (var person in model)
                {
                    if (person.ThumbnailId is not null)
                    {
                        person.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                        {
                            id = person.ThumbnailId.Value,
                        });
                    }
                }

                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("{id}/[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PersonDetails))]
        public IActionResult GetPersonById([FromRoute] Guid id)
        {
            try
            {
                var model = _personService.GetPersonById(id);

                if (model.ThumbnailId is not null)
                {
                    model.ThumbnailDownloadUrl = Url.Action("DownloadFileFromDatabase", "FileReference", new
                    {
                        id = model.ThumbnailId.Value,
                    });
                }

                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // ########## CREATE-Methoden ##########
        [HttpPost]
        [Route("{id}/[action]")]
        public IActionResult CreatePerson([FromRoute] Guid id, CreatePersonModel createModel)
        {
            try
            {
                var model = _personService.CreatePerson(id, createModel);
                return Ok(model);
            }
            catch(Exception)
            {
                return BadRequest();
            }
        }

        // ########## UPDATE-Methoden ##########
        [HttpPatch]
        [Route("{id}/[action]")]
        public IActionResult UpdatePerson([FromRoute] Guid id, UpdatePersonModel updateModel)
        {
            try
            {
                var model = _personService.UpdatePerson(id, updateModel);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPatch]
        [Route("{sourceId}/[action]/{personId}")]
        public IActionResult AddSourceToPerson([FromRoute] Guid sourceId, [FromRoute] Guid personId)
        {
            try
            {
                var model = _personService.AddSourceToPerson(sourceId, personId);   
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // ########## DELETE-Methoden ##########
        [HttpDelete]
        [Route("{id}/[action]")]
        public IActionResult DeletePerson([FromRoute] Guid id)
        {
            try
            {
                var model = _personService.DeletePerson(id);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
