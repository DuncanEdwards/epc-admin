import {combineReducers} from 'redux';
import user from './userReducer';
import account from './accountReducer';
//import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  user,
  account
});

export default rootReducer;
