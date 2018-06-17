import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/widget.service.client';
import {Widget} from '../models/widget.model.client';
import {isPlatformWorkerUi} from '@angular/common';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private widgetService: WidgetServiceClient) {
    this.route.params.subscribe(params => this.setParams(params));
  }
  topicId: number;
  widgets: Widget[] = [];
  setParams(params) {
    this.topicId = params['topicId'];
    this.loadWidgets(this.topicId);
  }
  loadWidgets(topicId) {
    if (topicId) {
      this.widgetService
        .findAllWidgetsForTopic(topicId)
        .then((widgets) => {
          const newWidgets = widgets as Widget[];
          newWidgets.sort((a, b) => a.widgetOrder - b.widgetOrder);
          this.widgets = newWidgets;
        });
    }
  }
  ngOnInit() {
  }

}
