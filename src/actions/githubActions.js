// @flow

import type { GithubUser } from '../reducers/githubReducer';

export function clearUser(): GithubAction {
  return {
    type: 'CLEAR_USER',
  };
}

export function fetchUser(): GithubAction {
  return {
    type: 'FETCH_USER',
  };
}

export function fetchUserSuccess(list: Array<GithubUser>): GithubAction {
  return {
    type: 'FETCH_USER_SUCCESS',
    list,
  };
}

export function fetchUserFailure(message: string): GithubAction {
  return {
    type: 'FETCH_USER_FAILURE',
    message,
  };
}

export type GithubAction =
  | { type: 'FETCH_USER' }
  | { type: 'FETCH_USER_SUCCESS', list: Array<GithubUser> }
  | { type: 'FETCH_USER_FAILURE', message: string }
  | { type: 'CLEAR_USER' };
