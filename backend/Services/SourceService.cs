using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;
using backend.ServiceInterfaces;
using Microsoft.EntityFrameworkCore;
using System;

namespace backend.Services
{
    public class SourceService : ISourceService
    {
        private readonly OpenMindServerContext _context;

        public SourceService(OpenMindServerContext context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<SourceDetails> GetAllSources()
        {
            List<SourceDetails> detailsList = new List<SourceDetails>();
            var sources = _context.Sources.Include(s => s.Thumbnail).Include(s => s.SubCategory).Include(s => s.SourceCategory).Include(s => s.FileReference).Include(s => s.Person).ToList();

            foreach(var source in sources)
            {
                detailsList.Add(ConvertModelToDetailsModel(source));
            }

            detailsList.RemoveAll(s => s == null);
            return detailsList;
        }

        public SourceDetails? GetSourceById(Guid id)
        {
            return ConvertModelToDetailsModel(_context.Sources.Include(s => s.Thumbnail).Include(s => s.SubCategory).Include(s => s.SourceCategory).Include(s => s.FileReference).Include(s => s.Person).FirstOrDefault(s => s.Id == id));
        }

        public List<SourceDetails> GetSourcesByTimeSpan(DateTime startDate, DateTime endDate)
        {
            List<SourceDetails> detailsList = new List<SourceDetails>();
            var sources = _context.Sources.Include(s => s.Thumbnail).Include(s => s.SubCategory).Include(s => s.SourceCategory).Include(s => s.FileReference).Include(s => s.Person).Where(s => s.DateOfCreation >= startDate && s.DateOfCreation <= endDate).ToList();

            foreach (var source in sources)
            {
                detailsList.Add(ConvertModelToDetailsModel(source));
            }

            detailsList.RemoveAll(s => s == null);
            return detailsList;
        }

        // ########## create-Methoden ##########
        public ResponseModel CreateSource(Guid id, CreateSourceModel createModel)
        {
            ResponseModel model = new ResponseModel();
            var person = _context.Persons.Include(p => p.Sources).Include(p => p.Thumbnail).FirstOrDefault(p => p.Id == createModel.PersonId);
            var sourceCategory = _context.SourceCategories.Include(c => c.SubCategories).FirstOrDefault(c => c.Id == createModel.SourceCategoryId);
            var subCategory = _context.SubCategories.FirstOrDefault(c => c.Id == createModel.SubCategoryId);
            var fileReference = _context.FileReferences.FirstOrDefault(f => f.Id == createModel.FileReferenceId);
            var thumbnail = _context.FileReferences.FirstOrDefault(f => f.Id == createModel.ThumbnailId);

            if (_context.Sources.Any(s => s.Name == createModel.Name))
            {
                model.IsSuccess = false;
                model.Message = "Sourcename is already taken";
                return model;
            }

            Source source = new Source();
            source.Id = id;
            source.Name = createModel.Name;
            source.Description = createModel.Description;
            source.DateOfCreation = createModel.DateOfCreation;
            source.DateOfDatabaseEntry = DateTime.Now;

            if (person is not null)
            {
                source.PersonId = createModel.PersonId;
                source.Person = person;
            }

            if(sourceCategory is not null)
            {
                source.SourceCategoryId = createModel.SourceCategoryId;
                source.SourceCategory = sourceCategory; 
            }
            
            if(subCategory is not null)
            {
                source.SubCategoryId = createModel.SubCategoryId; 
                source.SubCategory = subCategory;
            }
            
            if(thumbnail is not null)
            {
                source.ThumbnailId = createModel.ThumbnailId;
                source.Thumbnail = thumbnail;
                thumbnail.OnSource = source.Id;
            }

            if(fileReference is not null)
            {
                source.FileReferenceId = createModel.ThumbnailId;
                source.FileReference = fileReference;
                fileReference.OnSource = source.Id;
            }

            if(person is not null)
            {
                person.Sources.Add(source);
            }
            else
            {
                _context.Sources.Add(source);
            }

            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Source successfully created";
            return model;
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateSource(Guid id, UpdateSourceModel updateModel)
        {
            ResponseModel model = new ResponseModel();
            var source = _context.Sources.Include(s => s.Thumbnail).Include(s => s.SubCategory).Include(s => s.SourceCategory).Include(s => s.FileReference).Include(s => s.Person).FirstOrDefault(s => s.Id == id);
            var person = _context.Persons.Include(p => p.Sources).Include(p => p.Thumbnail).FirstOrDefault(p => p.Id == updateModel.PersonId);
            var sourceCategory = _context.SourceCategories.Include(c => c.SubCategories).FirstOrDefault(c => c.Id == updateModel.SourceCategoryId);
            var subCategory = _context.SubCategories.FirstOrDefault(c => c.Id == updateModel.SubCategoryId);
            var fileReference = _context.FileReferences.FirstOrDefault(f => f.Id == updateModel.FileReferenceId);
            var thumbnail = _context.FileReferences.FirstOrDefault(f => f.Id == updateModel.ThumbnailId);

            if (source is null)
            {
                model.IsSuccess = false;
                model.Message = "Source not found";
                return model;
            }

            if(updateModel.Name is not null && _context.Sources.Any(s => s.Name == updateModel.Name))
            {
                var sourceWithName = _context.Sources.Include(s => s.Thumbnail).Include(s => s.SubCategory).Include(s => s.SourceCategory).Include(s => s.FileReference).Include(s => s.Person).FirstOrDefault(s => s.Name == updateModel.Name);

                if(sourceWithName is not null && sourceWithName.Id != source.Id)
                {
                    model.IsSuccess = false;
                    model.Message = "New Name for Source is already taken";
                    return model;
                }
            }

            if(updateModel.Name is not null && _context.Sources.Any(s => s.Name == updateModel.Name) == false)
            {
                source.Name = updateModel.Name;
            }

            source.Description = updateModel.Description;

            if(updateModel.DateOfCreation is not null)
            {
                source.DateOfCreation = Convert.ToDateTime(updateModel.DateOfCreation);
            }

            if(person is not null)
            {
                source.PersonId = updateModel.PersonId;
                source.Person = person;

                if(person.Sources is not null && person.Sources.Any(s => s.Id == source.Id) == false)
                {
                    person.Sources.Add(source);
                    _context.Persons.Update(person);
                }
            }

            if(sourceCategory is not null)
            {
                source.SourceCategoryId = updateModel.SourceCategoryId;
                source.SourceCategory = sourceCategory;
            }

            if(subCategory is not null)
            {
                source.SubCategoryId = updateModel.SubCategoryId;
                source.SubCategory = subCategory;
            }

            if(thumbnail is not null)
            {
                source.ThumbnailId = updateModel.ThumbnailId;
                source.Thumbnail = thumbnail;

                thumbnail.OnSource = source.Id;
                _context.FileReferences.Update(thumbnail);
            }

            if(fileReference is not null)
            {
                source.FileReferenceId = updateModel.FileReferenceId;
                source.FileReference = fileReference;

                fileReference.OnSource = source.Id;
                _context.FileReferences.Update(fileReference);
            }

            _context.Sources.Update(source);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Source successfully updated";
            return model;
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteSource(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var source = _context.Sources.Include(s => s.Thumbnail).Include(s => s.SubCategory).Include(s => s.SourceCategory).Include(s => s.FileReference).Include(s => s.Person).FirstOrDefault(s => s.Id == id);

            if(source is null)
            {
                model.IsSuccess = false;
                model.Message = "Source not found";
                return model;
            }

            if(source.ThumbnailId is not null)
            {
                var thumbnail = _context.FileReferences.FirstOrDefault(f => f.Id == source.ThumbnailId);
                
                if(thumbnail is not null)
                {
                    thumbnail.OnSource = null;
                    _context.FileReferences.Update(thumbnail);
                }
            }

            if(source.PersonId is not null)
            {
                var person = _context.Persons.Include(p => p.Sources).Include(p => p.Thumbnail).FirstOrDefault(p => p.Id == source.PersonId);

                if(person is not null && person.Sources is not null && person.Sources.Contains(source))
                {
                    person.Sources.Remove(source);
                    _context.Persons.Update(person);
                }
            }

            if(source.FileReferenceId is not null)
            {
                var fileReference = _context.FileReferences.FirstOrDefault(f => f.Id == source.FileReferenceId);

                if (fileReference is not null)
                {
                    fileReference.OnSource = null;
                    _context.FileReferences.Update(fileReference);
                }
            }

            _context.Sources.Remove(source);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Source successfully deleted";
            return model;
        }

        // ########## HELPERS ##########
        private SourceDetails? ConvertModelToDetailsModel(Source source)
        {
            if (source is null)
            {
                return null;
            }

            SourceDetails details = new SourceDetails();
            details.Id = source.Id;
            details.DateOfCreation = source.DateOfCreation;
            details.DateOfDatabaseEntry = source.DateOfDatabaseEntry;
            details.Description = source.Description;

            if(source.FileReference is not null)
            {
                details.FileReferenceId = source.FileReferenceId;

                details.FileReference = new FileReferenceDetails();
                details.FileReference.FileName = source.FileReference.FileName;
                details.FileReference.OnPerson = source.FileReference.OnPerson;
                details.FileReference.CreationDate = source.FileReference.CreationDate;
                details.FileReference.Description = source.FileReference.Description;
                details.FileReference.FileSizeInBytes = source.FileReference.FileSizeInBytes;
                details.FileReference.OnSource = source.FileReference.OnSource;
                details.FileReference.MimeType = source.FileReference.MimeType;

            }

            if(source.Thumbnail is not null)
            {
                details.ThumbnailId = source.ThumbnailId;

                details.Thumbnail = new FileReferenceDetails();
                details.Thumbnail.FileName = source.Thumbnail.FileName;
                details.Thumbnail.OnPerson = source.Thumbnail.OnPerson;
                details.Thumbnail.CreationDate = source.Thumbnail.CreationDate;
                details.Thumbnail.Description = source.Thumbnail.Description;
                details.Thumbnail.FileSizeInBytes = source.Thumbnail.FileSizeInBytes;
                details.Thumbnail.OnSource = source.Thumbnail.OnSource;
                details.Thumbnail.MimeType = source.Thumbnail.MimeType;
            }

            if(source.SourceCategory is not null)
            {
                details.SourceCategoryId = source.SourceCategory.Id;

                details.SourceCategory = new SourceCategoryDetails();
                details.SourceCategory.Id = source.SourceCategory.Id;
                details.SourceCategory.IconName = source.SourceCategory.IconName;
                details.SourceCategory.Name = source.SourceCategory.Name;
                details.SourceCategory.Description = source.SourceCategory.Description;
                details.SourceCategory.HexColor = source.SourceCategory.HexColor;
            }

            if(source.SubCategory is not null)
            {
                details.SubCategoryId = source.SubCategory.Id;

                details.SubCategory = new SubCategoryDetails();
                details.SubCategory.Id = source.SubCategory.Id;
                details.SubCategory.SourceCategoryId = source.SubCategory.SourceCategoryId;
                details.SubCategory.Description = source.SubCategory.Description;
                details.SubCategory.Name = source.SubCategory.Name;
            }

            if(source.Person is not null)
            {
                details.PersonId = source.Person.Id;

                details.Person = new PersonDetails();
                details.Person.Id = source.Person.Id;
                details.Person.FirstName = source.Person.FirstName;
                details.Person.LastName = source.Person.LastName;
                details.Person.BirthDate = source.Person.BirthDate;
                details.Person.DeathDate = source.Person.DeathDate;
                details.Person.Description = source.Person.Description;
                details.Person.Nationality = source.Person.Nationality;
                details.Person.Title = source.Person.Title;

                if (source.Person.Thumbnail is not null)
                {
                    details.Person.ThumbnailId = source.Person.ThumbnailId;

                    details.Person.Thumbnail = new FileReferenceDetails();
                    details.Person.Thumbnail.Id = source.Person.Thumbnail.Id;
                    details.Person.Thumbnail.OnPerson = source.Person.Thumbnail.OnPerson;
                    details.Person.Thumbnail.Description = source.Person.Thumbnail.Description;
                    details.Person.Thumbnail.CreationDate = source.Person.Thumbnail.CreationDate;
                    details.Person.Thumbnail.OnSource = source.Person.Thumbnail.OnSource;
                    details.Person.Thumbnail.FileName = source.Person.Thumbnail.FileName;
                    details.Person.Thumbnail.FileSizeInBytes = source.Person.Thumbnail.FileSizeInBytes;
                    details.Person.Thumbnail.MimeType = source.Person.Thumbnail.MimeType;
                }
            }

            return details;
        }
    }
}
