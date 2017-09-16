import delay from './delay';
import getRequest from '../apiHelper';
import HttpStatus from 'http-status-codes';

class AuthApi {

  static getToken(email, password) {


    return new Promise((resolve, reject) => {

      let request = getRequest(
        {
          method:'POST',
          resource: 'account/token',
          body:JSON.stringify({ username: email, password })
        });

      fetch(request).then( function(response) {

        if (response.status == HttpStatus.OK) {
          //Return the access token
          response.json().then( json => { resolve({token:json.access_token}); });
        } else if (response.status == HttpStatus.FORBIDDEN) {
          resolve({errorMessage:"Invalid username or password"});
        } else {
          resolve({errorMessage:"Unexpected error, please try again later."});
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
