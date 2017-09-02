//import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from "./ajaxStatusActions";

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
    /*return dispatch => {
        return AuthorApi.getAllAuthors().then(authors => {
          dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
          throw(error);
        });
    };*/
}
