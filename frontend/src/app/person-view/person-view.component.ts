import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../api/services';
import { PersonDetails } from '../api/models';
import { ApiConfiguration } from '../api/api-configuration';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent {
  _persons: PersonDetails[] = [];
  _nationalitiesInDatabase: string[] = [];
  searchString: string = "";

  constructor(private router: Router, private personService: PersonService, private apiConfig: ApiConfiguration){
    personService.apiPersonGetAllPersonsGet$Json().subscribe({
      next: (p) => {
        
        for(const person of p){
          if(person.thumbnailDownloadUrl){
            person.thumbnailDownloadUrl = apiConfig.rootUrl + person.thumbnailDownloadUrl;
          }

          if(person.nationality){
            if(this._nationalitiesInDatabase.indexOf(person.nationality) < 0){
              this._nationalitiesInDatabase.push(person.nationality);
            }
          }
        }

        this._persons = p;
      }
    });
  }

  searchDataSet(){

  }

  navigateTo(path: string){
    this.router.navigate([path]);
  }
}
