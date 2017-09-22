// @flow
import { REHYDRATE } from 'redux-persist/constants';

import type { GithubAction } from '../actions/githubActions';
import type { AppState } from './rootReducers';

export type GithubUser = {
  login: string,
  id: number,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
};

export type GitHubUserDetail = {
  avatar_url: string,
  name: string,
  login: string,
  followers: number,
  following: number,
  bio: string,
  location: string,
  html_url: string,
};

export type GitHubState = {
  userList: Array<GithubUser>,
  isLoading: boolean,
  isFetching: boolean,
  followedUsers: Set<string>,
  userDetail: ?GitHubUserDetail,
  redirect: boolean,
};

const initialState: GitHubState = {
  userList: [],
  isLoading: false,
  isFetching: false,
  followedUsers: new Set(),
  userDetail: null,
  redirect: false,
};

export default function (state: GitHubState = initialState, action: GithubAction): GitHubState {
  switch (action.type) {
    case 'FETCH_USER':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        isFetching: false,
        userList: state.userList.concat(action.list),
      };
    case 'FETCH_USER_FAILURE':
      // TODO: handle error
      return {
        ...state,
        isFetching: false,
      };

    case 'CLEAR_USER':
      return {
        ...state,
        userList: [],
      };

    case REHYDRATE:
      // $FlowFixMe
      var incoming = action.payload.github;
      if (incoming) {
        return { ...state, ...incoming };
      }
      return state;

    case 'FOLLOW_USER':
      const newfollowedUsers = new Set(state.followedUsers);
      newfollowedUsers.add(action.login);
      return {
        ...state,
        followedUsers: newfollowedUsers,
      };

    case 'UNFOLLOW_USER':
      const followedUsers = new Set(state.followedUsers);
      followedUsers.delete(action.login);
      return {
        ...state,
        followedUsers,
      };

    case 'FETCH_USER_DETAIL':
      return {
        ...state,
        isLoading: true,
      };

    case 'FETCH_USER_DETAIL_SUCCESS':
      return {
        ...state,
        isLoading: false,
        userDetail: action.detail,
        redirect: true,
      };

    case 'FETCH_USER_DETAIL_FAILURE':
      // TODO: handle error
      return {
        ...state,
        isLoading: false,
      };

    case 'REDIRECT_COMPLETED':
      return {
        ...state,
        redirect: false,
      };

    default:
      return state;
  }
}

export function getLastId(state: AppState): number {
  const lastIndex = state.github.userList.length - 1;
  const lastUser = state.github.userList[lastIndex];

  if (lastUser) {
    return lastUser.id;
  }
  return 0;
}
