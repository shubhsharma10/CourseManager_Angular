import * as constants from '../constants/index';

export class ModuleServiceClient {

  findAllModulesForCourse(courseId) {
    return fetch(
      constants.MODULE_API_URL
        .replace('CID', courseId))
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        return null;
      });
  }
}
