import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import FadeImage from 'react-native-fade-image';

GLOBAL = require('../../Globals');

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <FadeImage
            style={styles.logoimg}
            source={require('../../../assets/img/car-good.png')}
            resizeMode='contain'
            duration={1000}
          />
          <Text style={styles.vroom}>vroom</Text>
        </View>
        <View style={styles.login}>
        <TouchableOpacity activeOpacity={0.8}>
          <FadeImage
            source={require('../../../assets/img/google_signin.png')}
            resizeMode='contain'
            duration={1000}
          />
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GLOBAL.COLOR.DARKGRAY,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoimg: {
    height: 120,
    width: 120,
  },
  vroom: {
    fontFamily: 'Nunito',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 75,
    color: GLOBAL.COLOR.GREEN
  },
  login: {
  },
});
