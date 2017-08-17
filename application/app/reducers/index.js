import {combineReducers} from 'redux';

import users from './users';
import musics from './musics';

export default combineReducers({
  users,
  musics
});
