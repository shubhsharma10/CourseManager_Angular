import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {Section} from '../models/section.model.client';

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
  navigationSubscriptions;
  setParams(params) {
    this.courseId = params['courseId'];
    this.loadSections(this.courseId);
  }
  loadSections(courseId) {
    this.sectionService
      .findSectionsForCourse(courseId)
      .then((result) => {
      this.sections = result as Section[];
      });
  }
  ngOnInit() {
  }

}
