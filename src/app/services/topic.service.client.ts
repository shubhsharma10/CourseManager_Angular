import * as constants from '../constants/index';

export class TopicServiceClient {

  findAllTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch(constants.TOPIC_API_URL
      .replace('CID', courseId)
      .replace('MID', moduleId)
      .replace('LID', lessonId))
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        return null;
      });
  }
}
