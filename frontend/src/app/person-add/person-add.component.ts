import { Component } from '@angular/core';
import { countryLibrary } from 'src/assets/countrylibrary/country-library';
import { CreatePersonModel, FileReferenceDetails } from '../api/models';
import { FileReferenceService, PersonService } from '../api/services';
import * as uuid from 'uuid';
import { ApiConfiguration } from '../api/api-configuration';
import { Router } from '@angular/router';
import { last } from 'rxjs';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent {
  _countries = countryLibrary;
  _id: string = uuid.v4();

  errorExists: boolean = false;
  errorHeader: string = "Placeholder-Header";
  errorMessage: string = "Placeholder-Message";

  isDeath: boolean = false;

  thumbnailPreviewUrl: string = "../../assets/imglibrary/placeholder-600x400.png";
  thumbnailFileReference: FileReferenceDetails = {};
  chosenFile: Blob = new Blob();

  title: string | null = "";
  firstName: string = "";
  lastName: string = "";
  description: string | null = "";
  nationality: string | null = "";
  birthDate: string | null = null;
  deathDate: string | null = null;

  constructor(private fileReferenceService: FileReferenceService, private apiConfiguration: ApiConfiguration, private router: Router, private personService: PersonService){
    this._id = uuid.v4();
  }

  generateCreateModel(){
    let thumbnailId: string | null = "";

    if(this.title && this.title.length < 1){
      this.title = null;
    }

    if(this.description && this.description.length < 1){
      this.description = null;
    }

    if(this.nationality && this.nationality.length < 1){
      this.nationality = null;
    }

    if(this.birthDate && this.birthDate.length < 1){
      this.birthDate = null;
    }

    if(this.isDeath === false || (this.deathDate && this.deathDate.length < 1)){
      this.deathDate = null;
    } 

    if(this.thumbnailFileReference.id){
      thumbnailId = this.thumbnailFileReference.id;
    }else{
      thumbnailId = null;
    }

    if(this.title){
      this.title = this.title.trim();
    }

    if(this.firstName){
      this.firstName = this.firstName.trim();
    }

    if(this.lastName){
      this.lastName = this.lastName.trim();
    }

    if(this.description){
      this.description = this.description.trim();
    }

    if(this.nationality){
      this.nationality = this.nationality.trim();
    }

    const createModel: CreatePersonModel = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      deathDate: this.deathDate,
      nationality: this.nationality,
      title: this.title,
      description: this.description,
      thumbnailId: thumbnailId,
    }

    return createModel;
  }

  selectFile(event: Event){
    const htmlInputElement: HTMLInputElement = event.target as HTMLInputElement;

    if(htmlInputElement && htmlInputElement.files){
      this.chosenFile = htmlInputElement.files[0];
    }
  }

  uploadThumbnail(){
    this.fileReferenceService.apiFileReferenceSubjectTypeUploadFileToDatabaseSubjectIdPost$Json({
      subjectType: "p",
      subjectId: this._id,
      body: {
        file: this.chosenFile
      }
    }).subscribe({
      next: (f) => {
        this.thumbnailFileReference = f;

        if(f.downloadUrl) {
          this.thumbnailPreviewUrl = this.apiConfiguration.rootUrl + f.downloadUrl; 
        }
      }
    });
  }

  detectingErrors(){
      if(this.firstName === ""){
      this.errorExists = true;
      this.errorHeader = "Required-Field-Error [Attribute: Firstname]";
      this.errorMessage = "Du musst (einen) Vornamen für die neue Person angeben";
      return true;
    }

    if(this.lastName === ""){
      this.errorExists = true;
      this.errorHeader = "Required-Field-Error [Attribute: Lastname]";
      this.errorMessage = "Du musst einen Namen für die neue Person angeben";
      return true;
    }

    if(this.isDeath && (this.deathDate === null || this.deathDate!.length < 1)){
      this.errorExists = true;
      this.errorHeader = "Date-Error [Attribute: Deathdate]";
      this.errorMessage = "Wenn die Eigenschaft 'verstorben' gewählt wurde, dann muss ein Sterbedatum angegeben werden";
      return true;
    }

    this.errorExists = false;
    return false;
  }

  navigateTo(path: string){
    this.router.navigate(["/" + path]);
  }

  discardChanges(){
    this.errorExists = false;
    this.errorHeader = "Placeholder-Header";
    this.errorMessage = "Placeholder-Message";
    this.isDeath = false;
    this.thumbnailPreviewUrl = "../../assets/imglibrary/placeholder-600x400.png";
    this.thumbnailFileReference = {};
    this.chosenFile = new Blob();
    this.title = "";
    this.firstName = "";
    this.lastName = "";
    this.description = "";
    this.nationality = "";
    this.birthDate = null;
    this.deathDate = null;
  }

  createPerson(){
    if(!this.detectingErrors()){
      const createModel: CreatePersonModel = this.generateCreateModel();

      this.personService.apiPersonIdCreatePersonPost({
        id: this._id,
        body: createModel
      }).subscribe({
        next: () => {
          this.navigateTo("persons/view");
        }
      });
    }
  }
}
