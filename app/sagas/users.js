import React from 'react';
import {put, call, fork, takeEvery, all} from 'redux-saga/effects'

import {
  getUserAPI,
  getUserRepostsAPI
} from '../api/users';
import {
  USER_GETTED,
  USER_REPOSTS_GETTED
} from '../actions/users';

function* getUser() {
  const user = yield call(getUserAPI);
  const reposts = yield call(getUserRepostsAPI, {page: 0, limit: 15});
  console.log('Reposts sags', reposts);
  yield put({type: USER_GETTED, payload: {user}});
  yield put({type: USER_REPOSTS_GETTED, payload: {reposts}})
}

function* flow() {
  yield all([
    fork(getUser)
  ]);
}

export default flow;
