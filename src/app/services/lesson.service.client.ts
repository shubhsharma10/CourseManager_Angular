import * as constants from '../constants/index';

export class LessonServiceClient {

  findAllLessonsForCourseModule(courseId, moduleId) {
    return fetch(constants.LESSON_API_URL
      .replace('CID', courseId)
      .replace('MID', moduleId))
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        return null;
      });
  }
}
