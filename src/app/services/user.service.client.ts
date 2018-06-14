import * as constants from '../constants/index';

export class UserServiceClient {

  login(user) {
    return fetch(constants.LOGIN_API_URL, {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch(constants.LOGOUT_API_URL, {
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUserById(userId) {
    return fetch(constants.USER_API_URL + userId)
      .then(response => response.json());
  }

  profile() {
    return fetch(constants.PROFILE_API_URL,
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  updateProfile(user) {
    return fetch(constants.PROFILE_API_URL, {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(constants.USER_API_URL, {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
