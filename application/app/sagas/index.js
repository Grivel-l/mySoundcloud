import {all, fork} from 'redux-saga/effects'

import users from './users';
import musics from './musics';

export default function* root() {
  yield all([
    fork(users),
    fork(musics)
  ]);
}
