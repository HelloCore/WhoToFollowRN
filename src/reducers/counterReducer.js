// @flow
import type { CounterAction } from '../actions/counterActions';

const initialState = {
  count: 0,
};

export type CounterState = typeof initialState;

export default function (state: CounterState = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'PLUS':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'MINUS':
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}
