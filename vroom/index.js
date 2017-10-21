import React, { Component } from 'react';
import Login from './src/components/Login/Login';
import Onboarding from './src/components/Onboarding/Onboarding';
import Revi from './src/Revi'
import { 
  AppRegistry, 
  NavigatorIOS, 
  StyleSheet,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

GLOBAL = require('./src/Globals');

/*
 * Constant: Vroom
 * Author: Elton C. Rego
 * 
 * Purpose: Creates a stack of the possible screens
 *   that can be used in the application
 */
const vroom = StackNavigator({
  // DEBUG: Uncomment Following Line to Test Revi
  // Revi: {screen: Revi},
  
  Login: {screen: Login},
  Onboarding: {screen: Onboarding},
});

// Pushes the Navigation Stack onto the View
AppRegistry.registerComponent('vroom', () => vroom);
