import { Component } from '@angular/core';
import { countryLibrary } from 'src/assets/countrylibrary/country-library';
import { FileReferenceDetails } from '../api/models';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent {
  _countries = countryLibrary;

  isDeath: boolean = false;

  thumbnailPreviewUrl: string = "../../assets/imglibrary/placeholder-600x400.png";
  thumbnailFileReference: FileReferenceDetails = {};
  chosenFile = new Blob();

  firstName: string = "";
  lastName: string = "";
  description: string | null = "";
  nationality: string | null = "";
  birthDate: string | null = null;
  deathDate: string | null = null;
  
  constructor(){}

  generateCreateModel(){

  }

  uploadThumbnail(){
    
  }
}
