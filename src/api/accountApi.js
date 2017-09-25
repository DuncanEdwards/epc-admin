import getRequest from './apiHelper';
import HttpStatus from 'http-status-codes';

class AccountApi {

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
          resolve({errorMessage:"Invalid username or password."});
        } else {
          resolve({errorMessage:"Unexpected error, please try again later."});
        }
      });
    });
  }

  static resetPassword(email, resetLink, isNewUser) {
    return new Promise((resolve, reject) => {

      let request = getRequest(
        {
          method:'POST',
          resource: 'account/sendresetlink',
          body:JSON.stringify({ email, resetLink, isNewUser })
        });

      fetch(request).then( function(response) {
        if (response.status == HttpStatus.OK) {
          resolve("");
        } else if (response.status == HttpStatus.FORBIDDEN) {
          resolve("This email address is not a user.");
        } else {
          resolve("Unexpected error, please try again later.");
        }
      });

    });
  }
}

export default AccountApi;
