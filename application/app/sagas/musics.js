import React from 'react';
import {put, call, fork, takeEvery, all} from 'redux-saga/effects'

import {
  sendMusicAPI,
  searchMusicAPI
} from '../api/musics';
import {
  MUSIC_SEND_TRACK,
  MUSIC_SEARCH_TRACK,
  MUSIC_SEND_TRACK_SUCCESS
} from '../actions/musics';

function* sendMusic({payload}) {
  try {
    yield call(sendMusicAPI, payload);
  } catch (error) {
    console.log('Error', error);
  }
}

function* sendMusicWatcher() {
  yield takeEvery(MUSIC_SEND_TRACK, sendMusic);
}

function* searchMusic({payload}) {
  const tracks = yield call(searchMusicAPI, payload);
  yield put({type: MUSIC_SEND_TRACK_SUCCESS, payload: {tracks}});
}

function* searchMusicWatcher() {
  yield takeEvery(MUSIC_SEARCH_TRACK, searchMusic);
}

function* flow() {
  yield all([
    fork(sendMusicWatcher),
    fork(searchMusicWatcher)
  ]);
}

export default flow;
