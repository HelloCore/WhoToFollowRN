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

export type GitHubState = {
  userList: Array<GithubUser>,
  isLoading: boolean,
  isFetching: boolean,
  followedUsers: Set<string>,
};

const initialState: GitHubState = {
  userList: [],
  isLoading: false,
  isFetching: false,
  followedUsers: new Set(),
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
