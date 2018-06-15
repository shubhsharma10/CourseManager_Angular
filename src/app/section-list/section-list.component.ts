import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }
  courseId: number;
  sections;
  setParams(params) {
    this.courseId = params['courseId'];
    this.loadSections(this.courseId);
  }
  loadSections(courseId){

  }

  ngOnInit() {
  }

}
