// @flow

import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

import type { FollowButtonProps } from '.';

export class FollowButton extends Component<void, FollowButtonProps, void> {
  _onBtnPress() {
    if (this.props.isFollowed) {
      this.props.onUnfollowUser(this.props.login);
    } else {
      this.props.onFollowUser(this.props.login);
    }
  }

  render() {
    const title = this.props.isFollowed ? 'Unfollow' : 'Follow';
    const style = [
      styles.followBtn,
      this.props.isFollowed ? styles.isFollowed : styles.isNotFollowed,
    ];

    if (Platform.OS === 'ios') {
      return (
        <TouchableOpacity onPress={() => this._onBtnPress()}>
          <View style={style}>
            <Text style={styles.textStyle}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableNativeFeedback style={style} onPress={() => this._onBtnPress()}>
        <View style={style}>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    );

    // return (
    //   <Button
    //     onPress={() => {
    //       if (this.props.isFollowed) {
    //         this.props.onUnfollowUser(this.props.login);
    //       } else {
    //         this.props.onFollowUser(this.props.login);
    //       }
    //     }}
    //     title={this.props.isFollowed ? 'Unfollow' : 'Follow'}
    //     style={[styles.followBtn, this.props.isFollowed ? styles.isFollowed : styles.isNotFollowed]}
    //   />
    // );
  }
}

const styles = StyleSheet.create({
  isFollowed: {
    backgroundColor: '#9B9B9B',
  },
  isNotFollowed: {
    // backgroundColor: 'transparent',
    backgroundColor: '#8BBF49',
  },
  followBtn: {
    height: 30,
    width: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
