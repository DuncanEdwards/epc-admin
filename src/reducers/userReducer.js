import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.userData, action) {
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS:
     return action.response;

    default:
      return state;
  }
}
