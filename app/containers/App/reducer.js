/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  loggedIn: false,
  currentUser: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state
        .set('loading', true)
        .set('error', false)
        .set('currentUser', false)
        .set('loggedIn', false);
    case LOGIN_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('currentUser', action.username)
    default:
      return state;
  }
}

export default appReducer;
