/* 
  @flow
*/

import { Component } from 'react';

import { registerScreens, HOME_SCREEN } from './screens';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

export default class App extends Component<void, void, void> {
  constructor() {
    super();
    this.startApp();
  }

  startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: HOME_SCREEN,
        title: 'Home',
        navigatorStyle: {
          navBarHidden: true,
        },
      },
      animationType: 'none',
    });
  }
}
