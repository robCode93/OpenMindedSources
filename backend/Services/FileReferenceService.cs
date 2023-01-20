using backend.CRUDModels;
using backend.DetailsModels;
using backend.Models;
using backend.ServiceInterfaces;
using Humanizer.Localisation;
using Microsoft.EntityFrameworkCore;
using System.IO;

namespace backend.Services
{
    public class FileReferenceService : IFileReferenceService
    {
        OpenMindServerContext _context;

        public FileReferenceService(OpenMindServerContext context)
        {
            _context = context;
        }

        // ########## GET-Methoden ##########
        public List<FileReferenceDetails> GetAllFileReferences()
        {
            List<FileReferenceDetails> detailsList = new List<FileReferenceDetails>();
            var fileReferences = _context.FileReferences.ToList();

            foreach (var fileReference in fileReferences)
            {
                detailsList.Add(ConvertModelToDetailsModel(fileReference));
            }

            detailsList.RemoveAll(i => i == null);
            detailsList.Sort();
            return detailsList;
        }

        public FileReferenceDetails? GetFileReferenceById(Guid id)
        {
            return ConvertModelToDetailsModel(_context.FileReferences.FirstOrDefault(i => i.Id == id)); 
        }

        // ########## CREATE-Methoden ##########
        public ResponseModel CreateFileReference(CreateFileReferenceModel createModel)
        {
            ResponseModel model = new ResponseModel();

            FileReference fileReference = new FileReference();
            fileReference.Description = createModel.Description;
            fileReference.FileName = createModel.FileName;
            fileReference.FileSizeInBytes = createModel.FileSizeInBytes;
            fileReference.MimeType = createModel.MimeType;
            fileReference.OnPerson = createModel.OnPerson;
            fileReference.OnSource = createModel.OnSource;

            _context.FileReferences.Add(fileReference);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "FileReference successfully created";
            return model;
        }

        public FileReferenceDetails UploadFileToDatabase(Stream file, string mimeType, CreateFileReferenceModel createModel)
        {
            string directoryName = mimeType.Split('/')[0];
            string directoryPath = "./openmind-data/" + directoryName;
            Guid fileReferenceId = Guid.NewGuid();
            string suffix = mimeType.Split("/")[1];
            string filePath = directoryPath + "/" + fileReferenceId + "." + suffix; 
            if(suffix == "vnd.ms-excel")
            {
                suffix = "csv";
            }

            using (FileStream fs = File.Create(filePath))
            {
                file.CopyTo(fs);
                fs.Close();
            }

            FileReference reference = new FileReference();  
            reference.Id = fileReferenceId;
            reference.FileName = filePath;
            reference.FileSizeInBytes = file.Length;
            reference.MimeType = mimeType;
            reference.OnSource = createModel.OnSource;
            reference.OnPerson = createModel.OnPerson;
            reference.CreationDate = DateTime.Now;

            _context.FileReferences.Add(reference);
            _context.SaveChanges();

            FileReferenceDetails details = new FileReferenceDetails();
            details.Id = reference.Id;
            details.FileName = reference.FileName;
            details.FileSizeInBytes = reference.FileSizeInBytes;
            details.MimeType = reference.MimeType;
            details.OnSource = reference.OnSource;
            details.OnPerson = reference.OnPerson;
            details.CreationDate = reference.CreationDate;

            return details;
        }

        // ########## DELETE-Methoden ##########
        public ResponseModel DeleteFileReference(Guid id)
        {
            ResponseModel model = new ResponseModel();
            var fileReference = _context.FileReferences.FirstOrDefault(f => f.Id == id);
            var source = _context.Sources.Include(s => s.Thumbnail).Include(s => s.FileReference).FirstOrDefault(s => s.Id == fileReference.OnSource);
            var person = _context.Persons.Include(p => p.Thumbnail).FirstOrDefault(p => p.Id == fileReference.OnPerson);

            if (fileReference is null)
            {
                model.IsSuccess = false;
                model.Message = "Filereference not found";
                return model;
            }

            if(fileReference.OnSource is not null && source is null)
            {
                model.IsSuccess = false;
                model.Message = "Source not found in database";
                return model;
            }

            if(fileReference.OnPerson is not null && person is null)
            {
                model.IsSuccess = false;
                model.Message = "Person not found";
                return model;
            }

            if(person is not null)
            {
                person.Thumbnail = null;
                _context.Persons.Update(person);
            }

            if(source is not null)
            {
                if(source.Thumbnail is not null && source.Thumbnail.Id == fileReference.Id)
                {
                    source.Thumbnail = null;
                    _context.Update(source);
                }

                if(source.FileReference is not null && source.FileReference.Id == fileReference.Id)
                {
                    source.FileReference = null;
                    _context.Update(source);
                }
            }

            _context.FileReferences.Remove(fileReference);
            _context.SaveChanges();

            model.IsSuccess = true;
            model.Message = "Filereference successfully deleted";
            return model;
        }

        // ########## HELPERS ##########
        private FileReferenceDetails? ConvertModelToDetailsModel(FileReference fileReference)
        {
            if (fileReference is null)
            {
                return null;
            }

            FileReferenceDetails details = new FileReferenceDetails();
            details.Id = fileReference.Id;
            details.FileName = fileReference.FileName;
            details.Description = fileReference.Description;
            details.MimeType = fileReference.MimeType;  
            details.FileSizeInBytes = fileReference.FileSizeInBytes;
            details.OnSource = fileReference.OnSource;
            details.OnPerson = fileReference.OnPerson;
            details.CreationDate = fileReference.CreationDate;

            return details;
        }
    }
}
