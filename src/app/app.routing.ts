import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminPageComponent, runGuardsAndResolvers: 'always'},
  { path: 'admin/course/:courseId/section', component: AdminPageComponent},
  { path: 'admin/course/:courseId/section/:sectionId', component: AdminPageComponent},
  { path: 'course/:courseId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  { path: '**', component: HomePageComponent} // last
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})

export class AppRoutingModule {}
