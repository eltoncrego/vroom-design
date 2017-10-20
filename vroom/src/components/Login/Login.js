/*
 * Import all the necessary components for this page.
 * Please delete components that aren't used.
 */
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

/* 
 * Class: Login
 * Author: Connick Shields and Elton C.  Rego
 *
 * Purpose: The Login class will render the application's
 *   Login screen.
 *
 * TODO: Impliment the next screen as being an actual log
 *   in with Google screen.
 */
export default class Login extends Component {

  /*
   * Method: goToOnboarding()
   * Author: Elton C. Rego
   *
   * Purpose: On invocation, will push the Onboarding
   *   component onto the view stack.
   *   (Loads the onboarding screen.)
   *
   * TODO: When login is implimented, replace with login
   *   with Google screen.
   */
  goToOnboarding() {
    this.props.navigator.push({
      component: Onboarding,
      title: 'Onboarding',
      navigationBarHidden: true
    });
  }

  /*
   * Method: render
   * Author: Connick Shields
   *
   * Purpose: Renders the Login Page.
   *  The login page has a Revi character, the text logo
   *  and a login with Google button.
   *
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.vroom}>vroom</Text>
          <Text style={styles.tagline}>The app that keeps your car happy!</Text>
	</View>
        <View style={styles.login}>
        <TouchableOpacity activeOpacity={0.8} 
	    onPress={
		    () => this.goToOnboarding()
	    }>
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

/*
 * Styles for this Page
 * Author: Connick Shields
 *
 */
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
    height: 111,
    width: 131,
  },
  vroom: {
    fontFamily: 'Nunito',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 80,
    color: GLOBAL.COLOR.GREEN,
    marginBottom: -20
  },
  tagline: {
    fontFamily: 'Nunito',
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 20
  },
  login: {
  },
});
