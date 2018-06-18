import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Section} from '../models/section.model.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) {
    this.route.params.subscribe(params => this.setParams(params));
  }
  courses: Course[] = [];
  courseId: number;
  sectionId = 0;
  section: Section = new Section();
  isSectionSelected = false;
  isCourseSelected = false;
  canUpdate = true;
  setParams(params) {
    this.courseId = params['courseId'];
    if (params['sectionId']) {
      this.sectionId = params['sectionId'];
      this.isSectionSelected = true;
      this.sectionService
        .findSectionsForCourse(this.courseId)
        .then((result) => {
        this.section = (result as Section[]).find(x => x._id === this.sectionId );
        });
    } else {
      this.sectionId = 0;
      this.isSectionSelected = false;
      this.section = new Section();
      this.section.name = 'Section 1';
    }
    if (this.courseId > 0) {
      this.isCourseSelected = true;
    }
  }

  updateSection() {
    const maxSeats = this.section.maxSeats;
    const minSeats = this.section.seats;
    if (maxSeats < minSeats) {
      this.canUpdate = false;
    } else {
      this.canUpdate = true;
      this.sectionService
        .updateSection(this.sectionId, this.section)
        .then(() => {
          this.router.navigate(['admin/course', this.courseId, 'section', this.sectionId]);
        })
        .catch(() => {
          console.log('Update section failed');
        });
    }
  }
  deleteSection() {
    this.sectionService
      .deleteSection(this.sectionId)
      .then(() => {
        this.router.navigate(['admin/course', this.courseId, 'section']);
      })
      .catch(() => {
        console.log('Delete section failed');
      });
  }
  createSection() {
    this.section.courseId = this.courseId;
    this.section.seats = 0;
    this.sectionService
      .createSection(this.courseId, this.section)
      .then(() => {
        this.section = new Section();
        this.section.name = 'Section 1';
        this.router.navigate(['admin/course', this.courseId, 'section']);
      });
  }
  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => {
        this.courses = courses as Course[];
        if (this.courseId > 0) {
          this.isCourseSelected = true;
        }
      })
      .catch(() => {
        this.isCourseSelected = false;
      });
  }

}
