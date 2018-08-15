/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import EventList from './components/EventList';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('churchapp.EventList', () => EventList, store, Provider);
}
