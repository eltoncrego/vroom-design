import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
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
          <FadeImage
            style={styles.googleimg}
            source={require('../../../assets/img/google_signin.png')}
            resizeMode='contain'
            duration={1000}
          />
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
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoimg: {
    height: 120,
    width: 120,
  },
  googleimg: {
    height: 200,
    width: 200,
  },
  vroom: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 75,
    color: GLOBAL.COLOR.GREEN
  },
  login: {
    flex: 2
  },
});
