import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../services/lesson.service.client';
import {ActivatedRoute} from '@angular/router';
import {Lesson} from '../models/lesson.model.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private lessonService: LessonServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId: number;
  moduleId: number;
  lessonId: number;
  lessons: Lesson[] = [];
  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadLessons(this.courseId, this.moduleId);
  }
  loadLessons(courseId, moduleId) {
    this.lessonService
      .findAllLessonsForCourseModule(courseId, moduleId)
      .then((lessons) => {
      this.lessons = lessons as Lesson[];
      });
  }
  ngOnInit() {
  }

}
