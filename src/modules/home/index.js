// @flow

import { HomeScreen } from './HomeScreen';
import { connect } from 'react-redux';
import { fetchUser, clearUser } from '../../actions/githubActions';

import type { DefaultReduxProps } from '../../types';
import type { Dispatch } from 'redux';
import type { AppState } from '../../reducers/rootReducers';
import type { GithubUser } from '../../reducers/githubReducer';

type ReduxProps = {
  counter: number,
  isRefreshingData: boolean, // Fetching Data ** Refresh
  isFetchingData: boolean, // Fetching Data ** Load More
  isLoading: boolean, // Loading Data ** Full Screen Load
  userList: Array<GithubUser>,
};

type DispatchProps = {
  onFetchUser: () => any,
  onClearUser: () => any,
};

export type HomeScreenProps = ReduxProps & DispatchProps & DefaultReduxProps;

function mapStateToProps(store: AppState): ReduxProps {
  const { userList, isFetching } = store.github;

  let isFetchingData = false;
  let isRefreshingData = false;

  if (isFetching === true) {
    if (userList.length == 0) {
      isRefreshingData = true;
    } else {
      isFetchingData = true;
    }
  }
  return {
    counter: store.counter.count,
    isLoading: store.github.isLoading,
    userList,
    isRefreshingData,
    isFetchingData,
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>): DispatchProps {
  return {
    onFetchUser: () => dispatch(fetchUser()),
    onClearUser: () => dispatch(clearUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
