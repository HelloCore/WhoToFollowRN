// @flow
/* eslint no-undef: "off" */
import { call, put, takeLatest, fork, all, select } from 'redux-saga/effects';
import { api } from '../services/api';

import {
  fetchUser,
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserDetailSuccess,
  fetchUserDetailFailure,
  type GithubAction,
} from '../actions/githubActions';

import { getLastId } from '../reducers/githubReducer';

function* fetchUserEffect(): Generator<*, *, *> {
  try {
    const since = yield select(getLastId);
    const result = yield call(api.fetchUser, since);

    yield put(fetchUserSuccess(result.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* clearUserEffect(): Generator<*, *, *> {
  yield put(fetchUser());
}

function* fetchUserDetailEffect(action: GithubAction): Generator<*, *, *> {
  try {
    if (action.type === 'FETCH_USER_DETAIL') {
      const login = action.login;

      const result = yield call(api.fetchUserDetail, action.login);

      yield put(fetchUserDetailSuccess(result.data));
    }
  } catch (error) {
    yield put(fetchUserDetailFailure(error));
  }
}

export function* watchFetchUser(): Generator<*, *, *> {
  yield takeLatest('FETCH_USER', fetchUserEffect);
}

export function* watchClearUser(): Generator<*, *, *> {
  yield takeLatest('CLEAR_USER', clearUserEffect);
}

export function* watchFetchUserDetail(): Generator<*, *, *> {
  yield takeLatest('FETCH_USER_DETAIL', fetchUserDetailEffect);
}

export default function* root(): Generator<*, *, *> {
  yield all([fork(watchFetchUser), fork(watchClearUser), fork(watchFetchUserDetail)]);
}
