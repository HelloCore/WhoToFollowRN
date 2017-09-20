// @flow
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
};

const initialState: GitHubState = {
  userList: [],
  isLoading: false,
  isFetching: false,
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
    default:
      return state;
  }
}

export function getUserCount(state: AppState): number {
  return state.github.userList.length;
}
