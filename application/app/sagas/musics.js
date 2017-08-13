import React from 'react';
import {put, call, fork, takeEvery, all} from 'redux-saga/effects'

import {
  sendMusicAPI
} from '../api/musics';
import {
  MUSIC_SEND_TRACK,
} from '../actions/musics';

function* sendMusic({payload}) {
  console.log('Send music saga', payload);
  yield call(sendMusicAPI, payload);
}

function* sendMusicWatcher() {
  yield takeEvery(MUSIC_SEND_TRACK, sendMusic);
}

function* flow() {
  yield all([
    fork(sendMusicWatcher)
  ]);
}

export default flow;
