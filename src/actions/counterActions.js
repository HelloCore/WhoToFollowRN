// @flow
export const plus = (): CounterAction => ({ type: 'COUNTER_PLUS', number: 1 });
export const minus = (): CounterAction => ({ type: 'COUNTER_MINUS', number: 1 });

export type CounterAction =
  | { type: 'COUNTER_PLUS', number: number }
  | { type: 'COUNTER_MINUS', number: number };
