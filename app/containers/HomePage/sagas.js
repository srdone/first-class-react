/**
 * Logs in to the app
 */

import { delay } from 'redux-saga';
import {
  take,
  put,
  select,
  cancel,
  takeLatest,
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { LOGIN } from 'containers/App/constants';
import { loginSuccess, loginError } from 'containers/App/actions';
import { makeSelectUsername, makeSelectPassword } from 'containers/HomePage/selectors';

// Your sagas for this container
export default [
  login,
];

/**
 * Login request/response handler
 */
export function* callLogin() {
  const username = yield select(makeSelectUsername());
  const password = yield select(makeSelectPassword());

  // fake implementation of login
  yield delay(2000);
  if (username === 'test' && password === 'test') {
    yield put(loginSuccess(username, 'authKey'));
  } else {
    yield put(loginError({ message: 'There was an error logging in.' }));
  }
}

/**
 * Login saga registration
 */
export function* login() {
  const watcher = yield takeLatest(LOGIN, callLogin);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
