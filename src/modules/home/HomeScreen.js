// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import type { HomeScreenProps } from '.';

export class HomeScreen extends Component<void, HomeScreenProps, void> {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
