import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseServiceClient} from './services/course.service.client';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CourseGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
