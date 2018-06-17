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
  updateSection(sectionId, section) {
    return fetch(constants.SECTION_API_URL.replace('SID', sectionId), {
      body: JSON.stringify(section),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  deleteSection(sectionId) {
    return fetch(constants.SECTION_API_URL.replace('SID', sectionId), {
      credentials: 'include', // include, same-origin, *omit
      method: 'delete'
    });
  }
  findSectionsForCourse(courseId) {
    return fetch(constants.COURSE_SECTION_API_URL.replace('CID', courseId))
      .then((response) => {
        return response.json();
    });
  }
  enrollStudentInSection(sectionId) {
    let url = constants.ENROLL_API_URL.replace('SID', sectionId);
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }
  cancelStudentEnrollmentInSection(sectionId) {
    let url = constants.ENROLL_API_URL.replace('SID',sectionId);
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
  findSectionsForStudent() {
    return fetch(constants.STUDENT_SECTION_API_URL, {
      method: 'get',
      credentials: 'include'
    })
      .then((response) => {
      return response.json();});
  }
}
