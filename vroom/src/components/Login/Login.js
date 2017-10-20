import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FadeImage from 'react-native-fade-image';
import Onboarding from '../Onboarding/Onboarding';

GLOBAL = require('../../Globals');

export default class Login extends Component {

  goToOnboarding() {
    this.props.navigator.push({
      component: Onboarding,
      title: 'Onboarding',
      navigationBarHidden: true
    });
  }

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
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.goToOnboarding()}>
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
