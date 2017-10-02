// @flow

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Button, Dimensions, Image } from 'react-native';

import FollowButton from '../../../../components/FollowButton';

import type { HomeCellProps } from '.';

export class HomeCell extends PureComponent<void, HomeCellProps, void> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <View style={styles.coverImageContainer}>
            <Image style={styles.coverImage} source={{ uri: this.props.user.avatar_url }} />
          </View>
          <Text style={styles.nameLabel}>{this.props.user.login}</Text>
        </View>
        <FollowButton login={this.props.user.login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameLabel: {
    marginLeft: 25,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#575757',
    overflow: 'hidden',
  },
  coverImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: '#575757',
  },
  coverImage: {
    overflow: 'hidden',
    borderRadius: 35,
    width: 70,
    height: 70,
  },
  followBtn: {},
});
