// @flow

import { FollowButton } from './FollowButton';
import { connect } from 'react-redux';

import { followUser, unfollowUser } from '../../actions/githubActions';

import type { DefaultReduxProps } from '../../types';
import type { Dispatch } from 'redux';
import type { AppState } from '../../reducers/rootReducers';

type Props = {
  login: string,
};

type ReduxProps = {
  isFollowed: boolean,
};

type DispatchProps = {
  onFollowUser: (login: string) => any,
  onUnfollowUser: (login: string) => any,
};

export type FollowButtonProps = ReduxProps & DispatchProps & DefaultReduxProps & Props;

function mapStateToProps(store: AppState, ownProps: Props): ReduxProps {
  return {
    isFollowed: store.github.followedUsers.has(ownProps.login),
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>): DispatchProps {
  return {
    onFollowUser: login => dispatch(followUser(login)),
    onUnfollowUser: login => dispatch(unfollowUser(login)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
