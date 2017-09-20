import { Navigation } from 'react-native-navigation';
import HomeScreen from './modules/home/';
import ProfileScreen from './modules/profile/';

export const HOME_SCREEN: string = 'SCREEN.HOME_SCREEN';
export const PROFILE_SCREEN: string = 'SCREEN.PROFILE_SCREEN';

export function registerScreens(store, Provider) {
  Navigation.registerComponent(HOME_SCREEN, () => HomeScreen, store, Provider);
  Navigation.registerComponent(PROFILE_SCREEN, () => ProfileScreen, store, Provider);
}
