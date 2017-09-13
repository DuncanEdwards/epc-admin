import delay from './delay';
import getRequest from '../apiHelper';

class AuthApi {

  static getToken(email, password) {


    return new Promise((resolve, reject) => {

      let request = getRequest({ method:'POST', body:JSON.stringify({ username: email, password }) })

      fetch(request).then( function(response) {

        if (response.status == 200) {
          //Return the access token
          response.json().then( json => { resolve({token:json.access_token}); });
        } else if (response.status == 403) {
          resolve({errorMessage:"Invalid username or password"});
        } else {
          resolve({errorMessage:"Unexpected error"});
        }
      });
    });
  }

  static resetPassword(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //Obviously implement this
        resolve(true);
      }, delay);
    });
  }
}

export default AuthApi;
