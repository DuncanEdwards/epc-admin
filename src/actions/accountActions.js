//import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import Authorizer from '../components/authorizer/authorizer';


export function refreshUser() {
  return { type: types.REFRESH_USER, user:Authorizer.GetUser() };
}

export function loginUserSuccess(user) {
  return { type: types.SAVE_USER_SUCCESS, user };
}
