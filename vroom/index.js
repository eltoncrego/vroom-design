import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

GLOBAL = require('./src/Globals');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class vroom extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Vroom!
        </Text>
        <Text style={styles.instructions}>
          powered by React Native
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GLOBAL.COLOR.GRAY,
  },
  welcome: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 20,
    color: GLOBAL.COLOR.BLUE,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontFamily: 'Nunito',
    textAlign: 'center',
    color: GLOBAL.COLOR.DARKBLUE,
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('vroom', () => vroom);
