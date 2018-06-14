import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseServiceClient} from './services/course.service.client';
import {routing} from './app.routing';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
