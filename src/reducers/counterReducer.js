// @flow
const PLUS: string = 'COUNTER_PLUS';
const MINUS: string = 'COUNTER_MINUS';

const initialState = {
  count: 0
};

export type CounterState = typeof initialState;

export const plus = (): CounterAction => ({ type: PLUS, payload: 1 });
export const minus = (): CounterAction => ({ type: MINUS, payload: 1 });

type CounterAction = { type: string, payload: number };

export default function(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        count: state.count + action.payload
      };
    case MINUS:
      return {
        ...state,
        count: state.count - action.payload
      };
  }
  return state;
}
