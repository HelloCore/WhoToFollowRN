// @flow

import { HomeCell } from './HomeCell';
import { connect } from 'react-redux';

import type { DefaultReduxProps } from '../../../../types';
import type { Dispatch } from 'redux';
import type { AppState } from '../../../../reducers/rootReducers';
import type { GithubUser } from '../../../../reducers/githubReducer';

type Props = {
  index: number,
};

type ReduxProps = {
  user: GithubUser,
};

type DispatchProps = {};

export type HomeCellProps = ReduxProps & DispatchProps & DefaultReduxProps & Props;

function mapStateToProps(store: AppState, ownProps: Props): ReduxProps {
  return {
    user: store.github.userList[ownProps.index],
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeCell);
