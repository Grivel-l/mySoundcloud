import React from 'react';
import {take, put, call, fork, takeEvery, all} from 'redux-saga/effects'
import {delay} from 'redux-saga';

import {getUserAPI} from '../api/users';
import {USER_GETTED} from '../actions/users';

function* getUser() {
  const user = yield call(getUserAPI);
  yield put({type: USER_GETTED, payload: {user}});
}

function* flow() {
  yield all([
    fork(getUser)
  ]);
}

export default flow;
