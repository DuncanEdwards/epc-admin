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

export function getTokenSuccess(token) {
  return { type: types.GET_TOKEN_SUCCESS, token };
}

export function getTokenFail() {
  return { type: types.GET_TOKEN_FAIL, token:null };
}

export function getToken(email, password) {
  return function(dispatch) {
    return AccountApi.getToken(email, password).then( response =>
    {
      if (response.token) {
        dispatch(getTokenSuccess(response.token));
      } else {
        dispatch(getTokenFail());
      }
      return response;
    }).catch( error => {
      throw(error);
    });
  };
}
