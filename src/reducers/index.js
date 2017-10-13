import {combineReducers} from 'redux';
import userData from './userReducer';
import user from './accountReducer';

const rootReducer = combineReducers({
  user,
  userData
});

export default rootReducer;
