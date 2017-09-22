// @flow

import React, { Component } from 'react';

import { Text, View, Image, StyleSheet, Dimensions, Linking, ScrollView } from 'react-native';

import FollowButton from '../../components/FollowButton';

import type { ProfileScreenProps } from '.';

export class ProfileScreen extends Component<void, ProfileScreenProps, void> {
  _onTapAtURL() {
    if (this.props.userDetail != null) {
      Linking.openURL(this.props.userDetail.html_url);
    }
  }

  render() {
    if (this.props.userDetail != null) {
      const { userDetail } = this.props;
      return (
        <ScrollView>
          <View style={styles.container}>
            <Image source={{ uri: userDetail.avatar_url }} style={styles.coverImage} />
            <Text style={styles.nameLabel}>{userDetail.name}</Text>
            <Text style={styles.loginLabel}>@{userDetail.login}</Text>
            <View style={styles.followContainer}>
              <View style={styles.subFollowContainer}>
                <Text style={styles.followLabel}>{userDetail.followers}</Text>
                <Text style={styles.followLabel}>Follower</Text>
              </View>
              <View style={styles.subFollowContainer}>
                <Text style={styles.followLabel}>{userDetail.following}</Text>
                <Text style={styles.followLabel}>Following</Text>
              </View>
              <View style={styles.subFollowContainer}>
                <FollowButton login={userDetail.login} />
              </View>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.detailLabel}>Bio: {userDetail.bio}</Text>
              <Text style={styles.detailLabel}>Location: {userDetail.location}</Text>
              <View style={styles.urlContainer}>
                <Text style={styles.detailLabel}>Url: </Text>
                <Text
                  style={[styles.detailLabel, styles.urlLabel]}
                  onPress={() => this._onTapAtURL()}
                >
                  {userDetail.html_url}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }
    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameLabel: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  loginLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  followContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    marginTop: 25,
    width: Dimensions.get('window').width,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  subFollowContainer: {
    width: Dimensions.get('window').width / 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  followLabel: {
    fontWeight: '600',
    fontSize: 15,
  },
  detailContainer: {
    padding: 20,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
  },
  detailLabel: {
    fontSize: 17,
    marginBottom: 6,
  },
  urlContainer: {
    flexDirection: 'row',
  },
  urlLabel: {
    textDecorationLine: 'underline',
  },
});
