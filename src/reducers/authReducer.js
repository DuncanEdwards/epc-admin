import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.GET_USER:
     return action.user;

    default:
      return state;
  }
}