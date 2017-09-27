import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.REFRESH_USER:
     return action.user;

    default:
      return state;
  }
}
