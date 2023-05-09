/* tslint:disable */
/* eslint-disable */
import { FileReferenceDetails } from './file-reference-details';
import { SourceDetails } from './source-details';
export interface PersonDetails {
  birthDate?: null | string;
  deathDate?: null | string;
  description?: null | string;
  firstName?: null | string;
  genderMan?: boolean;
  genderWomen?: boolean;
  id?: null | string;
  lastName?: null | string;
  nationality?: null | string;
  sources?: null | Array<SourceDetails>;
  thumbnail?: FileReferenceDetails;
  thumbnailDownloadUrl?: null | string;
  thumbnailId?: null | string;
  title?: null | string;
}
