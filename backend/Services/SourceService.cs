using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;
using backend.ServiceInterfaces;
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
            throw new NotImplementedException();
        }

        public SourceDetails GetSourceById(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<SourceDetails> GetSourcesByTimeSpan(DateTime startDate, DateTime endDate)
        {
            throw new NotImplementedException();
        }

        // ########## create-Methoden ##########
        public ResponseModel CreateSource(CreateSourceModel createModel)
        {
            throw new NotImplementedException();
        }

        // ########## UPDATE-Methoden ##########
        public ResponseModel UpdateSource(Guid Id, UpdateSourceModel updateModel)
        {
            throw new NotImplementedException();
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteSource(Guid Id)
        {
            throw new NotImplementedException();
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
                details.FileReferenceId = source.FileReference.Id;

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
                details.ThumbnailId = source.Thumbnail.Id;

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
