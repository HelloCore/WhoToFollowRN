// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import type { ProfileScreenProps } from '.';

export class ProfileScreen extends Component<void, ProfileScreenProps, void> {
  render() {
    return (
      <View>
        <Text>This is profile page</Text>
      </View>
    );
  }
}
