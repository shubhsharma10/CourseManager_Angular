import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private router: Router,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient) {
    this.isUserLoggedIn = 0;
  }

  courses: Course[] = [];
  isUserLoggedIn = 0;
  enroll(courseId) {
    this.userService
      .isUserLoggedIn()
      .then((result) => {
        if (result.status === 200) {
          this.isUserLoggedIn = 1;
          return true;
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
      .catch((error) => {
        console.log(error);
      });
  }
  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses as Course[]);
  }

}
