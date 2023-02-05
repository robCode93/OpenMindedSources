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
  
  dropdownCategories: boolean = false;
  dropdownPersons: boolean = false;

  categories: SourceCategoryDetails[] = [];
  persons: PersonDetails[] = [];

  constructor(private categoryService: SourceCategoryService, private personService: PersonService, private router: Router){
    categoryService.apiSourceCategoryGetAllSourceCategoriesGet$Json().subscribe({
      next: c => this.categories = c
    });

    personService.apiPersonGetAllPersonsGet$Json().subscribe({
      next: p => this.persons = p
    });
  }

  toggleMenuButton(event: Event){
    const element = this.getHtmlElement(event.target as HTMLElement) as HTMLSpanElement;

    try{
      if(element.classList && element.classList.contains("categoryLink")){
        if(this.dropdownCategories){
          this.dropdownCategories = false;
          this.dropdownPersons = false;
        }else{
          this.dropdownCategories = true;
          this.dropdownPersons = false;
        }
      }
  
      if(element.classList && element.classList.contains("personLink")){
        if(this.dropdownPersons){
          this.dropdownCategories = false;
          this.dropdownPersons = false;
        }else{
          this.dropdownCategories = false;
          this.dropdownPersons = true;
        }
      }
    }
    catch(e){
    }
  }

  getHtmlElement(element: HTMLElement){
    if(element instanceof HTMLDivElement){
      return element.children[0] as HTMLSpanElement;
    }

    if(element instanceof HTMLSpanElement){
      return element;
    }

    return element.parentElement!.children[0] as HTMLSpanElement;
  }

  navigateTo(path: string){
    this.dropdownCategories = false;
    this.dropdownPersons = false;
    
    this.router.navigate(["/" + path]);
  }
}
