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
    this.isActiveUserStudent = 0;
  }

  courses: Course[] = [];
  isUserStudent = false;
  isActiveUserStudent = 0;
  enrolledCourses: Course[] = [];
  enroll(courseId) {
    if (this.isUserStudent) {
      this.isActiveUserStudent = 1;
      this.router.navigate(['course', courseId, 'section']);
    } else {
      this.isActiveUserStudent = 2;
    }
  }
  loadEnrolledCourses() {
    this.sectionService
      .findSectionsForStudent()
      .then((result) => {
        const courseIdList = (result as Array<any>).map(x => x.section.courseId);
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
