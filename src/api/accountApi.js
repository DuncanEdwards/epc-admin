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
          resolve({errorMessage:"Invalid username or password"});
        } else {
          resolve({errorMessage:"Unexpected error, please try again later"});
        }
      }).catch(function(error) {
        resolve({errorMessage:"Unexpected error, please try again later"});
      });
    });
  }

  static sendResetLink(email, resetLink, isNewUser) {
    return new Promise((resolve, reject) => {

      let request = getRequest(
        {
          method:'POST',
          resource: 'account/sendresetlink',
          body:JSON.stringify({ email, resetLink, isNewUser })
        });

      fetch(request).then( function(response) {
        if (response.status == HttpStatus.OK) {
          resolve({errorMessage:""});
        } else if (response.status == HttpStatus.FORBIDDEN) {
          resolve({errorMessage:"This email address is not a user"});
        } else {
          resolve({errorMessage:"Unexpected error, please try again later"});
        }
      }).catch(function(error) {
        resolve({errorMessage:"Unexpected error, please try again later"});
      });

    });
  }

  static resetPassword(newPassword, rememberToken) {
    return new Promise((resolve, reject) => {

      let request = getRequest(
        {
          method:'PUT',
          resource: 'account/resetpassword',
          body:JSON.stringify({ password:newPassword, rememberToken })
        });

      fetch(request).then( function(response) {
        if (response.status == HttpStatus.NO_CONTENT) {
          resolve({errorMessage:""});
        } else {
          resolve({errorMessage:"Unable to reset password for this user"});
        }
      }).catch(function(error) {
        resolve({errorMessage:"Unexpected error, please try again later"});
      });

    });
  }

  static changePassword(user, oldPassword, newPassword) {
    return new Promise((resolve, reject) => {

      let request = getRequest(
        {
          method:'PUT',
          resource: 'account/' + user.sub + '/changepassword',
          body:JSON.stringify({ oldPassword, newPassword })
        });

      fetch(request).then( function(response) {
        if (response.status == HttpStatus.NO_CONTENT) {
          resolve({errorMessage:""});
        } else if (response.status == HttpStatus.FORBIDDEN) {
          resolve({errorMessage:"Current password is incorrect"});
        } else {
          resolve({errorMessage:"Unable to change password for this user"});
        }
      }).catch(function(error) {
        resolve({errorMessage:"Unexpected error, please try again later"});
      });

    });
  }

}

export default AccountApi;
