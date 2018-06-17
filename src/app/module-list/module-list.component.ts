import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../services/module.service.client';
import {Module} from '../models/module.model.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private moduleService: ModuleServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId: number;
  moduleId: number;
  modules: Module[] = [];

  setParams(params) {
    const newCourseId =  params['courseId'];
    if (this.courseId !== newCourseId) {
      this.courseId = newCourseId;
    }
    this.moduleId = params['moduleId'];
    this.loadModules(this.courseId);
  }

  loadModules(courseId) {
    if (courseId) {
      this.moduleService
        .findAllModulesForCourse(courseId)
        .then((modules) => {
          this.modules = modules as Module[];
        });
    }
  }

  ngOnInit() {
  }

}
