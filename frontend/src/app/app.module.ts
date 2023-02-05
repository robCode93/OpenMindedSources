import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ApiModule } from './api/api.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { PersonViewComponent } from './person-view/person-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonAddComponent,
    CategoryAddComponent,
    PersonViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "persons/add",
        component: PersonAddComponent
      },
      {
        path: "persons/view",
        component: PersonViewComponent
      },
      {
        path: "categories/add",
        component: CategoryAddComponent
      }
    ]),
    ApiModule.forRoot({
      rootUrl: "http://localhost:5253"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
