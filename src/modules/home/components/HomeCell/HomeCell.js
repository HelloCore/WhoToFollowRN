// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Dimensions, Image } from 'react-native';

import FollowButton from '../../../../components/FollowButton';

import type { HomeCellProps } from '.';

export class HomeCell extends Component<void, HomeCellProps, void> {
  render() {
    const x = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Image style={styles.coverImage} source={{ uri: this.props.user.avatar_url }} />
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
    marginLeft: 25,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#575757',
  },
  coverImage: {
    backgroundColor: '#575757',
    width: 70,
    height: 70,
    borderRadius: 35,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  followBtn: {},
});
