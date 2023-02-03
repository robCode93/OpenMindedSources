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

    if(element.innerText === "Kategorien"){
      if(this.dropdownCategories){
        this.dropdownCategories = false;
        this.dropdownPersons = false;
      }else{
        this.dropdownCategories = true;
        this.dropdownPersons = false;
      }
    }

    if(element.innerText === "Personen"){
      if(this.dropdownPersons){
        this.dropdownCategories = false;
        this.dropdownPersons = false;
      }else{
        this.dropdownCategories = false;
        this.dropdownPersons = true;
      }
    }
  }

  getHtmlElement(element: HTMLElement){
    if(element instanceof HTMLDivElement){
      return element.children[0] as HTMLElement;
    }

    if(element instanceof HTMLSpanElement){
      return element;
    }

    return element.parentElement!.children[0];
  }

  navigateTo(path: string){
    this.router.navigate(["/" + path]);
  }
}
