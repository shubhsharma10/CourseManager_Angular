export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://cs5610-summer1-nodejs-ssharma.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  profile() {
    return fetch('https://cs5610-summer1-nodejs-ssharma.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://cs5610-summer1-nodejs-ssharma.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
