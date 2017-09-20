// @flow

import type { CounterAction } from './counterActions';
import type { GithubAction } from './githubActions';

export type Actions = CounterAction | GithubAction;
