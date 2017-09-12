import { combineReducers } from 'redux';
import * as homeReducers from '../containers/Home/reducers';
import * as memeReducers from '../containers/Meme/reducers';

export default combineReducers({
  ...homeReducers,
  ...memeReducers,
  nav: require('../navigation/reducer').reducer,
});
