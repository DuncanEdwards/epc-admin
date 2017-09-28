import {combineReducers} from 'redux';
import users from './userReducer';
import user from './accountReducer';
//import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  user,
  users
});

export default rootReducer;
