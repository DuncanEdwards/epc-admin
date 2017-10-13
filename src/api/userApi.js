import HttpStatus from 'http-status-codes';
import getRequest from './apiHelper';


class UserApi {
  static getUsers(pageNumber = 2, orderBy = "Surname desc", typeFilter="") {
    return new Promise((resolve, reject) => {

      let url = 'users?pageSize=12&pageNumber=' + pageNumber + '&orderBy=' + orderBy;
      if (typeFilter) {
        url += "&type=" + typeFilter;
      }

      let request = getRequest(
        {
          method:'GET',
          resource: encodeURI(url),
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
