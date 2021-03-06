import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseServiceClient} from './services/course.service.client';
import {AppRoutingModule} from './app.routing';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/lesson.service.client';
import {TopicServiceClient} from './services/topic.service.client';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import {WidgetServiceClient} from './services/widget.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {UserServiceClient} from './services/user.service.client';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SectionListComponent } from './section-list/section-list.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import {SectionServiceClient} from './services/section.service.client';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { StudentSectionsComponent } from './student-sections/student-sections.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    ProfileComponent,
    LoginComponent,
    SectionListComponent,
    TopNavbarComponent,
    AdminPageComponent,
    StudentSectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
