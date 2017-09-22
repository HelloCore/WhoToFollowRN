// @flow

import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';

import type { FollowButtonProps } from '.';

export class FollowButton extends Component<void, FollowButtonProps, void> {
  render() {
    return (
      <Button
        onPress={() => {
          if (this.props.isFollowed) {
            this.props.onUnfollowUser(this.props.login);
          } else {
            this.props.onFollowUser(this.props.login);
          }
        }}
        title={this.props.isFollowed ? 'Unfollow' : 'Follow'}
        style={[styles.followBtn, this.props.isFollowed ? styles.isFollowed : styles.isNotFollowed]}
      />
    );
  }
}

const styles = StyleSheet.create({
  isFollowed: {},
  isNotFollowed: {},
  followBtn: {},
});
