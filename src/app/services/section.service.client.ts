import * as constants from '../constants/index';

export class SectionServiceClient {

  createSection(courseId, section) {
    return fetch(constants.COURSE_SECTION_API_URL.replace('CID', courseId), {
      body: JSON.stringify(section),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  findSectionsForCourse(courseId) {
    return fetch(constants.COURSE_SECTION_API_URL.replace('CID', courseId))
      .then(response => response.json());
  }
}
