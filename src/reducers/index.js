import { combineReducers } from 'redux';
import menu from './menu';
import status from './status';

export default combineReducers({
  menu,
  status,
});
