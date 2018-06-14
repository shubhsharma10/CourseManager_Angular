import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {RegisterComponent} from './register/register.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'course/:courseId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  { path: '**', component: HomePageComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
