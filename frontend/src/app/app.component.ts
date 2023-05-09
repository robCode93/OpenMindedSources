import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonDetails, SourceCategoryDetails } from './api/models';
import { PersonService, SourceCategoryService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Open Mind Sources';

  constructor(private router: Router){

  }

 navigateTo(path: string){
  this.router.navigate([path]);
 }
}
