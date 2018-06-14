import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Topic} from '../models/topic.model.client';
import {TopicServiceClient} from '../services/topic.service.client';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private topicService: TopicServiceClient) {
    this.route.params.subscribe(params => this.setParams(params));
  }
  courseId: number;
  moduleId: number;
  lessonId: number;
  topicId: number;
  topics: Topic[] = [];
  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    this.loadTopics(this.courseId, this.moduleId, this.lessonId);
  }
  loadTopics(cid, mid, lid) {
    this.topicService
      .findAllTopicsForLesson(cid, mid, lid)
      .then(topics => this.topics = topics as Topic[]);
  }
  ngOnInit() {
  }

}
