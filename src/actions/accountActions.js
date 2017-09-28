//import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import Authorizer from '../components/authorizer/authorizer';
import AccountApi from "../api/accountApi";


export function refreshUser() {
  return { type: types.REFRESH_USER, user:Authorizer.GetUser() };
}

export function loginUserSuccess(user) {
  return { type: types.SAVE_USER_SUCCESS, user };
}

export function getToken(email, password) {
  return function(dispatch) {
    return AccountApi.getToken(email, password).then( response =>
    {
      dispatch({type: types.GET_TOKEN, token:response.token});
      return response;
    }).catch( error => {
      throw(error);
    });
  };
}
