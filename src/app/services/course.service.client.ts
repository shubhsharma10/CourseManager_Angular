import * as constants from '../constants/index';

export class CourseServiceClient {

  findAllCourses() {
    return fetch(constants.COURSE_API_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(constants.COURSE_API_URL + '/' + courseId)
      .then(response => response.json());
  }
}
