import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {NgModel} from '@angular/forms';
import {User} from '../models/user.model.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private router: Router,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient,
              private sectionService: SectionServiceClient) {
    this.isUserLoggedIn = 0;
  }

  courses: Course[] = [];
  isUserLoggedIn = 0;
  isUserStudent = false;
  enrolledCourses: Course[] = [];
  enroll(courseId) {
    this.userService
      .isUserLoggedIn()
      .then((result) => {
        if (result.status === 200) {
          this.isUserLoggedIn = 1;
          return this.userService.profile();
        } else {
          this.isUserLoggedIn = 2;
          throw new Error('No user logged in');
        }
      })
      .then((result) => {
        if (result) {
          this.router.navigate(['course', courseId, 'section']);
        }
      })
      .catch(() => {
        console.log('No user logged in');
      });
  }
  loadEnrolledCourses() {
    this.sectionService
      .findSectionsForStudent()
      .then((result) => {
        const courseIdList = (result as Array<any>).map(x => x.section.courseId);
        console.log(courseIdList);
        return this.courseService.findCoursesByIds(courseIdList);
      })
      .then((result) => {
        this.enrolledCourses = result as Course[];
      })
      .catch(() => {
        console.log('Cannot load enrolled courses');
      });
  }
  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses as Course[]);
    this.userService
      .isUserLoggedIn()
      .then((result) => {
        if (result.status === 200) {
          return this.userService.profile();
        } else {
          this.isUserStudent = false;
          throw new Error('No user logged in');
        }
      })
      .then((result) => {
        if (result) {
          const user = result as User;
          this.isUserStudent = user.userType === 'Student';
        }
      })
      .catch(() => {
        console.log('No user logged in');
      });
    this.loadEnrolledCourses();
  }

}
