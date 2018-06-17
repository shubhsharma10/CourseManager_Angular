import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {Section} from '../models/section.model.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-sections',
  templateUrl: './student-sections.component.html',
  styleUrls: ['./student-sections.component.css']
})
export class StudentSectionsComponent implements OnInit {

  constructor(private sectionService: SectionServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }
  sections: Section[] = [];
  enrolledSections;
  courseId: number;
  setParams(params) {
    this.courseId = params['courseId'];
    this.loadSections();
    this.loadEnrolledSections();
  }
  loadSections() {
    this.sectionService
      .findSectionsForCourse(this.courseId)
      .then((result) => {
        this.sections = result as Section[];
      });
  }
  loadEnrolledSections() {
    this.sectionService
      .findSectionsForStudent()
      .then((sections) => {
        this.enrolledSections = sections;
      });
  }
  isEnrolled(sectionId) {
    if (this.enrolledSections) {
      const index = this.enrolledSections.findIndex(x => x.section._id === sectionId);
      return index !== -1;
    } else {
      return false;
    }
  }
  enrollInSection(sectionId) {
    this.sectionService
      .enrollStudentInSection(sectionId)
      .then((result) => {
        if (result.status === 200) {
          return result.json();
        } else {
          throw new Error('enrollment failed');
        }
      })
      .then(() => {
          this.loadSections();
          this.loadEnrolledSections();
      })
      .catch(() => {
        console.log('Enrollment failed');
      });
  }
  cancelEnrollmentInSection(sectionId) {
    this.sectionService
      .cancelStudentEnrollmentInSection(sectionId)
      .then((result) => {
        if (result.status === 200) {
          return true;
        } else {
          throw new Error('enrollment withdrawal failed');
        }
      })
      .then(() => {
        this.loadSections();
        this.loadEnrolledSections();
      })
      .catch(() => {
        console.log('Enrollment cancellation failed');
      });
  }
  ngOnInit() {}

}
