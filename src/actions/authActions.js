//import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import Authorizer from '../components/authorizer/authorizer';

export function getUser(user) {
  return { type: types.GET_USER, user:Authorizer.GetUser() };
}
