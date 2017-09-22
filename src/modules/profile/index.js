// @flow

import { ProfileScreen } from './ProfileScreen';
import { connect } from 'react-redux';

import type { DefaultReduxProps } from '../../types';
import type { Dispatch } from 'redux';
import type { AppState } from '../../reducers/rootReducers';
import type { GitHubUserDetail } from '../../reducers/githubReducer';

type ReduxProps = {
  userDetail: ?GitHubUserDetail,
};

type DispatchProps = {};

export type ProfileScreenProps = ReduxProps & DispatchProps & DefaultReduxProps;

function mapStateToProps(store: AppState): ReduxProps {
  return {
    userDetail: store.github.userDetail,
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
