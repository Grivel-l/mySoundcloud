import {all, fork} from 'redux-saga/effects'

import users from './users';

export default function* root() {
  yield all([
    fork(users)
  ]);
}
