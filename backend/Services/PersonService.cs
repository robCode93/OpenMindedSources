using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;
using backend.ServiceInterfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class PersonService : IPersonService
    {
        OpenMindServerContext _context;

        public PersonService(OpenMindServerContext context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<PersonDetails> GetAllPersons()
        {
            List<PersonDetails> detailsList = new List<PersonDetails>();
            var persons = _context.Persons.Include(p => p.Sources).Include(p => p.Thumbnail).ToList();

            foreach (var person in persons)
            {
                detailsList.Add(ConvertModelToDetailsModel(person));
            }

            detailsList.RemoveAll(i => i == null);
            return detailsList;
        }

        public PersonDetails? GetPersonById(Guid Id)
        {
            return ConvertModelToDetailsModel(_context.Persons.Include(p => p.Thumbnail).Include(p => p.Sources).FirstOrDefault(p => p.Id == Id));    
        }

        public List<PersonDetails> GetPersonsByTimeSpan(DateTime startDate, DateTime endDate)
        {
            List<PersonDetails> detailsList = new List<PersonDetails>();
            var persons = _context.Persons.Include(p => p.Sources).Include(p => p.Thumbnail).Where(p => p.BirthDate >= startDate && p.BirthDate <= endDate).ToList();

            foreach (var person in persons)
            {
                detailsList.Add(ConvertModelToDetailsModel(person));
            }

            detailsList.RemoveAll(i => i == null);
            return detailsList;
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreatePerson(CreatePersonModel createModel)
        {
            ResponseModel model = new ResponseModel();

            if(createModel.BirthDate > createModel.DeathDate)
            {
                model.IsSuccess = false;
                model.Message = "Birthdate can`t be in the future of Deathdate";
                return model;
            }

            Person person = new Person();
            person.Id = Guid.NewGuid();
            person.Nationality = createModel.Nationality;
            person.Description = createModel.Description;
            person.DeathDate = createModel.DeathDate;
            person.BirthDate = createModel.BirthDate;
            person.FirstName = createModel.FirstName;
            person.LastName = createModel.LastName;
            person.Title = createModel.Title;

            if(createModel.ThumbnailId is not null)
            {
                person.ThumbnailId = createModel.ThumbnailId;
                person.Thumbnail = _context.FileReferences.FirstOrDefault(f => f.Id == createModel.ThumbnailId);
            }

            if(createModel.SourceIds is not null)
            {
                foreach(var id in createModel.SourceIds)
                {
                    var source = _context.Sources.Include(s => s.SourceCategory).Include(s => s.FileReference).Include(s => s.Thumbnail).FirstOrDefault(s => s.Id == id);

                    if(source is not null)
                    {
                        person.Sources.Add(source);
                        source.PersonId = person.Id;

                        _context.Sources.Update(source);
                    }
                }
            }

            _context.Persons.Add(person);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Person successfully created";
            return model;
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel AddSourceToPerson(Guid sourceId, Guid personId)
        {
            ResponseModel model = new ResponseModel();
            var person = _context.Persons.Include(p => p.Thumbnail).Include(p => p.Sources).FirstOrDefault(p => p.Id == personId);
            var source = _context.Sources.Include(s => s.SourceCategory).Include(s => s.FileReference).Include(s => s.Thumbnail).FirstOrDefault(s => s.Id == sourceId);

            if(person is null)
            {
                model.IsSuccess = false;
                model.Message = "Person-Data not found";
                return model;
            }

            if(source is null)
            {
                model.IsSuccess = false;
                model.Message = "Source-Data not found";
                return model;
            }

            if(person.Sources.Any(s => s.Id == sourceId) == true)
            {
                model.IsSuccess = true;
                model.Message = "Source already added";
                return model;
            }

            person.Sources.Add(source);
            source.PersonId = person.Id;

            _context.Update(person);
            _context.Update(source);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Source successfully added to person";
            return model;
        }

        public ResponseModel UpdatePerson(UpdatePersonModel updateModel)
        {
            throw new NotImplementedException();
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeletePerson(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var person = _context.Persons.Include(p => p.Thumbnail).Include(p => p.Sources).FirstOrDefault(p => p.Id == id);

            if(person is null)
            {
                model.IsSuccess = false;
                model.Message = "Person not found";
                return model;   
            }

            if(person.Sources is not null && person.Sources.Count > 0)
            {
                foreach(var source in person.Sources)
                {
                    source.PersonId = null;
                    _context.Sources.Update(source);
                }
            }
        }

        // ########## HELPERS ##########
        private PersonDetails? ConvertModelToDetailsModel(Person person)
        {
            if(person is null)
            {
                return null;
            }

            PersonDetails details = new PersonDetails();
            details.Id = person.Id;
            details.FirstName = person.FirstName;
            details.LastName = person.LastName;
            details.Description = person.Description;   
            details.Nationality = person.Nationality;
            details.Title = person.Title;
            details.BirthDate = person.BirthDate;
            details.DeathDate = person.DeathDate;
            
            foreach( var source in person.Sources)
            {
                SourceDetails sourceDetails = new SourceDetails();
                sourceDetails.Id = source.Id;
                sourceDetails.DateOfCreation = source.DateOfCreation;
                sourceDetails.DateOfDatabaseEntry = source.DateOfDatabaseEntry;
                sourceDetails.SourceCategoryId = source.SourceCategoryId;
                sourceDetails.PersonId = source.PersonId;
                sourceDetails.Description = source.Description;
                sourceDetails.Name = source.Name;
            }

            return details;
        }
    }
}
