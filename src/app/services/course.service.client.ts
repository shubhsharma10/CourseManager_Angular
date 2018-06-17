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
  findCoursesByIds(courseIdList) {
    courseIdList = courseIdList as Array<number>;
    courseIdList = courseIdList.filter(function (item, index, inputArray) {
                          return inputArray.indexOf(item) === index;
                    });
    const urls: string[] = [];
    for (let i = 0; i < courseIdList.length; i++) {
      urls.push(constants.COURSE_API_URL + '/' + courseIdList[i]);
    }

    return Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
      )).then( courses => {
        return courses;
      });
  }
}
