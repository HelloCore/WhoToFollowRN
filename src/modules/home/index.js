// @flow

import { HomeScreen } from './HomeScreen';
import { connect } from 'react-redux';
import { plus, minus } from '../../actions/counterActions';
import { fetchUser } from '../../actions/githubActions';

import type { DefaultReduxProps } from '../../types';
import type { Dispatch } from 'redux';
import type { AppState } from '../../reducers/rootReducers';
import type { GithubUser } from '../../reducers/githubReducer';

type ReduxProps = {
  counter: number,
  isFetching: boolean,
  isLoading: boolean,
  userList: Array<GithubUser>,
};

type DispatchProps = {
  onPlus: () => any,
  onMinus: () => any,
  onFetchUser: () => any,
};

export type HomeScreenProps = ReduxProps & DispatchProps & DefaultReduxProps;

function mapStateToProps(store: AppState): ReduxProps {
  return {
    counter: store.counter.count,
    isFetching: store.github.isFetching,
    isLoading: store.github.isLoading,
    userList: store.github.userList,
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>): DispatchProps {
  return {
    onPlus: () => dispatch(plus()),
    onMinus: () => dispatch(minus()),
    onFetchUser: () => dispatch(fetchUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
