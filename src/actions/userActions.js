//import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from "./ajaxStatusActions";
import UserApi from "../api/mock/mockUserApi";

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
    return dispatch => {
        return UserApi.getUsers().then(users => {
          dispatch(loadUsersSuccess(users));
        }).catch(error => {
          throw(error);
        });
    };
}
