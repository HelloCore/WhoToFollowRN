// @flow
/* eslint no-undef: "off" */

import { fork, all } from 'redux-saga/effects';
import GithubSaga from './githubSaga';

export default function* root(): Generator<*, *, *> {
  yield all([fork(GithubSaga)]);
}
