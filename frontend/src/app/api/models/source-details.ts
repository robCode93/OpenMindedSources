/* tslint:disable */
/* eslint-disable */
import { FileReferenceDetails } from './file-reference-details';
import { PersonDetails } from './person-details';
import { SourceCategoryDetails } from './source-category-details';
import { SubCategoryDetails } from './sub-category-details';
export interface SourceDetails {
  dateOfCreation?: null | string;
  dateOfDatabaseEntry?: null | string;
  description?: null | string;
  fileDownloadUrl?: null | string;
  fileReference?: FileReferenceDetails;
  fileReferenceId?: null | string;
  id?: null | string;
  name?: null | string;
  person?: PersonDetails;
  personId?: null | string;
  sourceCategory?: SourceCategoryDetails;
  sourceCategoryId?: null | string;
  subCategory?: SubCategoryDetails;
  subCategoryId?: null | string;
  thumbnail?: FileReferenceDetails;
  thumbnailDownloadUrl?: null | string;
  thumbnailId?: null | string;
}
