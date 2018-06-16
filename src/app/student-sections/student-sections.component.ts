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
  courseId: number;
  setParams(params) {
    this.courseId = params['courseId'];
    this.loadSections();
  }
  loadSections() {
    this.sectionService
      .findSectionsForCourse(this.courseId)
      .then((result) => {
        this.sections = result as Section[];
      });
  }
  enrollInSection(sectionId) {
    
  }
  ngOnInit() {
  }

}
