import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ApiModule } from './api/api.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { SourcesViewComponent } from './sources-view/sources-view.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { FilereferencesViewComponent } from './filereferences-view/filereferences-view.component';
import { PersonAddComponent } from './person-add/person-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonViewComponent,
    SourcesViewComponent,
    CategoryViewComponent,
    FilereferencesViewComponent,
    PersonAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "persons",
        component: PersonViewComponent
      },
      {
        path: "persons/add",
        component: PersonAddComponent
      },
      {
        path: "sources",
        component: SourcesViewComponent
      },
      {
        path: "categories",
        component: CategoryViewComponent
      },
      {
        path: "files",
        component: FilereferencesViewComponent
      },
    ]),
    ApiModule.forRoot({
      rootUrl: "http://localhost:5253"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
