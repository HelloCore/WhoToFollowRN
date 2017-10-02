// @flow

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  InteractionManager,
} from 'react-native';

import { PROFILE_SCREEN } from '../../screens';
import Spinner from 'react-native-loading-spinner-overlay';

import HomeCell from './components/HomeCell';

import type { HomeScreenProps } from '.';
import type { GithubUser } from '../../reducers/githubReducer';

const REFRESH_NAV_BTN_ID = 'REFRESH_NAV_BTN_ID';

export class HomeScreen extends Component<void, HomeScreenProps, void> {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Refresh',
        id: REFRESH_NAV_BTN_ID,
      },
    ],
  };

  constructor(props: void) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    this.props.onFetchUser();
  }

  onNavigatorEvent(event: Object) {
    if (event.type === 'NavBarButtonPress' && event.id === REFRESH_NAV_BTN_ID) {
      this.props.onClearUser();
    }
  }

  componentWillReceiveProps(nextProps: HomeScreenProps) {
    if (nextProps.redirect) {
      this.props.onRedirectCompleted();
      this.props.navigator.push({
        screen: PROFILE_SCREEN,
        backButtonTitle: '',
        title: 'Profile',
      });
    }
  }

  _onTapAtIndex(index: number) {
    if (this.props.isLoading === false) {
      const user = this.props.userList[index];
      this.props.onFetchUserDetail(user.login);
    }
  }

  _renderItem(item: GithubUser, index: number) {
    if (Platform.OS === 'ios') {
      return (
        <TouchableOpacity key={index} onPress={() => this._onTapAtIndex(index)} activeOpacity={0.4}>
          <HomeCell key={item.login} index={index} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableNativeFeedback key={index} onPress={() => this._onTapAtIndex(index)}>
        <View key={index}>
          <HomeCell key={item.login} index={index} />
        </View>
      </TouchableNativeFeedback>
    );
  }

  _renderFooter() {
    if (this.props.isFetchingData === true) {
      return (
        <View>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          refreshing={this.props.isRefreshingData}
          keyExtractor={item => item.login}
          data={this.props.userList}
          onRefresh={() => {
            this.props.onClearUser();
          }}
          removeClippedSubviews
          onEndReachedThreshold={200}
          onEndReached={(info) => {
            if (this.props.isFetchingData === false && this.props.isRefreshingData === false) {
              console.log(info);
              InteractionManager.runAfterInteractions(() => {
                this.props.onFetchUser();
              });
            }
          }}
          ListFooterComponent={() => this._renderFooter()}
          ListEmptyComponent={() => <View />}
          renderItem={({ item, index }) => this._renderItem(item, index)}
        />
        <Spinner visible={this.props.isLoading} textStyle={{ color: '#FFF' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
