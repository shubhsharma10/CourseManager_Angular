import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {Section} from '../models/section.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient) { }
  user: User = new User();
  enrolledCourses: Course[] = [];
  enrolledSections: Section[] = [];
  userNotLoggedIn = false;
  isAdminUser = false;
  update(user: User) {
    console.log(user);
    this.userService
      .updateProfile(user)
      .then(function(result) {
       console.log(result);
      });
  }
  logout() {
    this.userService
      .logout()
      .then(() => this.router.navigate(['login']));
  }
  loadEnrolledCourses() {
    this.sectionService
      .findSectionsForStudent()
      .then((result) => {
        const sectionList = (result as Array<any>).map(x => x.section);
        const courseIdList = (result as Array<any>).map(x => x.section.courseId);
        this.enrolledSections = sectionList;
        return this.courseService.findCoursesByIds(courseIdList);
      })
      .then((result) => {
        this.enrolledCourses = result as Course[];
      })
      .catch(() => {
        console.log('Cannot load enrolled courses');
      });
  }
  getSectionsOfCourse(courseID) {
    let sectionNames = '';
    for (let i = 0; i < this.enrolledSections.length ; i++) {
        if (this.enrolledSections[i].courseId === courseID) {
          sectionNames = sectionNames + ' ' + this.enrolledSections[i].name;
        }
    }
    return sectionNames;
  }
  ngOnInit() {
    this.userService
      .isUserLoggedIn()
      .then((result) => {
          if (result.status === 200) {
            this.userNotLoggedIn = false;
            return this.userService.profile();
          } else {
            this.userNotLoggedIn = true;
            throw new Error('No user logged in');
          }
      })
      .then((result) => {
        this.user = result as User;
        if (this.user.userType === 'Admin') {
          this.isAdminUser = true;
        }
      })
      .catch(() => {
      this.userNotLoggedIn = true;
      });
    this.loadEnrolledCourses();
  }
}
