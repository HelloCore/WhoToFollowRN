// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Dimensions } from 'react-native';

import FollowButton from '../../../../components/FollowButton';

import type { HomeCellProps } from '.';

export class HomeCell extends Component<void, HomeCellProps, void> {
  render() {
    const x = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <View style={styles.coverImage} />
          <Text style={styles.nameLabel}>{this.props.user.login}</Text>
        </View>
        <FollowButton
          login={this.props.user.login}
          onPress={() => {
            console.log('Press');
          }}
        />
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
    marginLeft: 10,
    fontSize: 20,
  },
  coverImage: {
    backgroundColor: 'red',
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  followBtn: {},
});
