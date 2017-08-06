import React from 'react';
import {put, call, fork, takeEvery, all} from 'redux-saga/effects'

import {
  getUserAPI,
  getUserRepostsAPI,
  getUserLikesAPI
} from '../api/users';
import {
  USER_GETTED,
  USER_REPOSTS_GETTED,
  USER_LIKES_GETTED
} from '../actions/users';

function* getUser() {
  const user = yield call(getUserAPI);
  const reposts = yield call(getUserRepostsAPI, {page: 0, limit: 15});
  const likes = yield call(getUserLikesAPI, {page: 0, limit: 15});

  yield all([
    put({type: USER_GETTED, payload: {user}}),
    put({type: USER_REPOSTS_GETTED, payload: {reposts}}),
    put({type: USER_LIKES_GETTED, payload: {likes}})
  ]);
}

function* flow() {
  yield all([
    fork(getUser)
  ]);
}

export default flow;
