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
  USER_LIKES_GETTED,
  USER_LOAD_REPOSTS,
  USER_LOAD_LIKES
} from '../actions/users';

const LIMIT = 15;
const getOffset = url => {
  return new URLSearchParams(new URL(url).search).get('offset');
};

function* getUser() {
  const user = yield call(getUserAPI);
  const reposts = yield call(getUserRepostsAPI, {offset: 0, limit: LIMIT});
  const likes = yield call(getUserLikesAPI, {offset: 0, limit: LIMIT});

  yield all([
    put({type: USER_GETTED, payload: {user}}),
    put({type: USER_REPOSTS_GETTED, payload: {reposts}}),
    put({type: USER_LIKES_GETTED, payload: {likes: likes.collection, nextOffset: getOffset(likes.next_href)}})
  ]);
}

function* loadReposts({payload}) {
  const reposts = yield call(getUserRepostsAPI, {offset: payload, limit: LIMIT});
  yield put({type: USER_REPOSTS_GETTED, payload: {reposts}});
}

function* loadLikes({payload}) {
  const likes = yield call(getUserLikesAPI, {offset: payload, limit: LIMIT});
  yield put({type: USER_LIKES_GETTED, payload: {likes: likes.collection, nextOffset: getOffset(likes.next_href)}});
}

function* loadRepostsWatcher() {
  yield takeEvery(USER_LOAD_REPOSTS, loadReposts);
}

function* loadLikesWatcher() {
  yield takeEvery(USER_LOAD_LIKES, loadLikes);
}

function* flow() {
  yield all([
    fork(getUser),
    fork(loadRepostsWatcher),
    fork(loadLikesWatcher)
  ]);
}

export default flow;
