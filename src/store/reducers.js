import { combineReducers } from 'redux';
import * as homeReducers from '../containers/Home/reducers';

export default combineReducers({
  ...homeReducers,
  nav: require('../navigation/reducer').reducer,
});
