// @flow

import { combineReducers } from 'redux';
import counter from './counterReducer';
import github from './githubReducer';

import type { CounterState } from '../reducers/counterReducer';
import type { GitHubState } from '../reducers/githubReducer';

export type AppState = {
  counter: CounterState,
  github: GitHubState,
};

const rootReducer = combineReducers({
  counter,
  github,
});

export default rootReducer;
