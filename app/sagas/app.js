import React from 'react';
import {take, put, call, fork, takeEvery, all} from 'redux-saga/effects'
import {delay} from 'redux-saga';

import {
  APP_GET_PROPS,
  APP_GET_PROPS_SUCCESS
} from '../actions/app';

function* defaultProps() {
  yield call(delay, 2000);
  yield put({type: APP_GET_PROPS_SUCCESS});
}

function* defaultPropsWatcher() {
  yield takeEvery(APP_GET_PROPS, defaultProps);
}

function* flow() {
  yield all([
    fork(defaultPropsWatcher)
  ]);
}

export default flow;
