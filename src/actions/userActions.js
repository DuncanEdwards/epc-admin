//import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import UserApi from "../api/userApi";

export function loadUsersSuccess(response) {
  return { type: types.LOAD_USERS_SUCCESS, response };
}

export function loadUsers(pageNumber, sortClause) {
    return dispatch => {
        return UserApi.getUsers(pageNumber, sortClause).then(response => {
          dispatch(loadUsersSuccess(response));
        }).catch(error => {
          throw(error);
        });
    };
}
