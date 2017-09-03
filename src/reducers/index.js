import {combineReducers} from 'redux';
import users from './userReducer';
import user from './authReducer';
//import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  users,
  user
});

export default rootReducer;
