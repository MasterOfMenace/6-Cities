import {combineReducers} from 'redux';
import NameSpace from './name-space.js';
import {reducer as data} from './data/data.js';
import {reducer as user} from './user/user.js';
import {reducer as app} from './app-reducer/app-reducer.js';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.APP]: app
});
