// @flow

import { combineReducers } from 'redux';
import counter from './counterReducer';

import type { CounterState } from '../reducers/counterReducer';

export type AppState = {
  counter: CounterState
};

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
