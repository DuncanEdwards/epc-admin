//import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import UserApi from "../api/userApi";

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
    return dispatch => {
        return UserApi.getUsers().then(users => {
          debugger;
          dispatch(loadUsersSuccess(users));
        }).catch(error => {
          throw(error);
        });
    };
}
