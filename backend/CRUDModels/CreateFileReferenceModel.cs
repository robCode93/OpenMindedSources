namespace backend.CRUDModels
{
    public class CreateFileReferenceModel
    {
        public string FileName { get; set; }
        public string MimeType { get; set; }
        public string? Description { get; set; }
        public long? FileSizeInBytes { get; set; }
        public Guid? OnPerson { get; set; }
        public Guid? OnSource { get; set; }
    }
}
