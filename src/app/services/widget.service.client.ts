import * as constants from '../constants/index';

export class WidgetServiceClient {

  findAllWidgetsForTopic(topicId) {
    return fetch(constants.WIDGET_API_URL.replace('TID', topicId))
      .then(response => response.json())
      .catch(function (error) {
        console.log('Error in find widgets for topic: '+error);
        return null;
      });
  }
}
