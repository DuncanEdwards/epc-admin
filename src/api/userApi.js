import HttpStatus from 'http-status-codes';
import getRequest from './apiHelper';


class UserApi {
  static getUsers(pageNumber = 2, orderBy = "Surname desc") {
    return new Promise((resolve, reject) => {

      let request = getRequest(
        {
          method:'GET',
          resource: encodeURI('users?pageSize=15&pageNumber=' + pageNumber + '&orderBy=' + orderBy),
          isRemoveAuthorize: false
        });

      fetch(request).then( function(response) {

        if (response.status == HttpStatus.OK) {
          let pagination = JSON.parse(response.headers.get("X-Pagination"));
          //Return the access token
          response.json().then( users => { resolve({users,pagination}); });
        } else {
          resolve({errorMessage:"Unexpected error, please try again later"});
        }

      }).catch(function(error) {
        resolve({errorMessage:"Unexpected error, please try again later"});
      });
    });
  }
}

export default UserApi;
