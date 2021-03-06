import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {Section} from '../models/section.model.client';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private sectionService: SectionServiceClient,
              private router: Router) {
    this.route.params.subscribe(params => this.setParams(params));
    this.navigationSubscriptions = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.loadSections(this.courseId);
      }
    });
  }
  courseId: number;
  sections: Section[] = [];
  sectionId: number;
  navigationSubscriptions;
  setParams(params) {
    this.courseId = params['courseId'];
    this.loadSections(this.courseId);
    if (params['sectionId']) {
      this.sectionId = params['sectionId'];
    } else {
      this.sectionId = 0;
    }
  }
  loadSections(courseId) {
    if (courseId) {
      this.sectionService
        .findSectionsForCourse(courseId)
        .then((result) => {
          this.sections = result as Section[];
        });
    } else {
      console.log('course id not present');
    }
  }
  ngOnInit() {
  }

}
