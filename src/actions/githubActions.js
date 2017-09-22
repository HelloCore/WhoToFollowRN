// @flow

import type { GithubUser, GitHubUserDetail } from '../reducers/githubReducer';

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

export function followUser(login: string): GithubAction {
  return {
    type: 'FOLLOW_USER',
    login,
  };
}

export function unfollowUser(login: string): GithubAction {
  return {
    type: 'UNFOLLOW_USER',
    login,
  };
}

export function fetchUserDetail(login: string): GithubAction {
  return {
    type: 'FETCH_USER_DETAIL',
    login,
  };
}

export function fetchUserDetailSuccess(detail: GitHubUserDetail): GithubAction {
  return {
    type: 'FETCH_USER_DETAIL_SUCCESS',
    detail,
  };
}

export function fetchUserDetailFailure(message: string): GithubAction {
  return {
    type: 'FETCH_USER_DETAIL_FAILURE',
    message,
  };
}

export function redirectCompleted(): GithubAction {
  return {
    type: 'REDIRECT_COMPLETED',
  };
}

export type GithubAction =
  | { type: 'FETCH_USER' }
  | { type: 'FETCH_USER_SUCCESS', list: Array<GithubUser> }
  | { type: 'FETCH_USER_FAILURE', message: string }
  | { type: 'CLEAR_USER' }
  | { type: 'FOLLOW_USER', login: string }
  | { type: 'UNFOLLOW_USER', login: string }
  | { type: 'FETCH_USER_DETAIL', login: string }
  | { type: 'FETCH_USER_DETAIL_SUCCESS', detail: GitHubUserDetail }
  | { type: 'FETCH_USER_DETAIL_FAILURE', message: string }
  | { type: 'REDIRECT_COMPLETED' };
