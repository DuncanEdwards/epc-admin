import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    id: 'f49cae7e-a80f-4288-b825-91f6f23f6476',
    firstName: 'Duncan',
    surname: 'Edwards',
    Type: 'Agent'
  },
  {
    id: '0875ec38-f812-43c3-a7ed-0336cd940162',
    firstName: 'Lisa',
    surname: 'Simpson',
    Type: 'Agent'
  },
  {
    id: '5f8b723d-1013-4bd1-bffa-4a120cdd7df2',
    firstName: 'Bart',
    surname: 'Simpson',
    Type: 'Agent'
  },
  {
    id: '05cd4786-634a-41f3-87e4-af52817a2b3f',
    firstName: 'Marge',
    surname: 'Simpson',
    Type: 'Agent'
  }
];


class UserApi {
  static getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }
}

export default UserApi;
