import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';
import ApplicationContext from './src/context';

export default function App() {
  return (
  <ApplicationContext>
    <StatusBar hidden={true} />
    <Routes />
  </ApplicationContext>);
}
