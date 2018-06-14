import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private courseService: CourseServiceClient) { }

  courses: Course[] = [];

  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses as Course[]);
  }

}
