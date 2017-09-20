// @flow
/* eslint no-undef: "off" */
import { call, put, takeLatest, fork, all, select } from 'redux-saga/effects';
import { api } from '../services/api';

import { fetchUser, fetchUserSuccess, fetchUserFailure } from '../actions/githubActions';
import { getUserCount } from '../reducers/githubReducer';

function* fetchUsers(): Generator<*, *, *> {
  try {
    const since = yield select(getUserCount);
    const result = yield call(api.fetchUsers, since);

    yield put(fetchUserSuccess(result.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* clearUser(): Generator<*, *, *> {
  yield put(fetchUser());
}

export function* watchFetchUsers(): Generator<*, *, *> {
  yield takeLatest('FETCH_USER', fetchUsers);
}

export function* watchClearUsers(): Generator<*, *, *> {
  yield takeLatest('CLEAR_USER', clearUser);
}

export default function* root(): Generator<*, *, *> {
  yield all([fork(watchFetchUsers)]);
}
