/*
 * Import all the necessary components for this page.
 * Please delete components that aren't used.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Login from '../Login/Login';

GLOBAL = require('../../Globals');

/*
 * Class: Onboarding
 * Author: Elton C.  Rego
 *
 * Purpose: Walks the user through naming their car and then
 *   takes in the make, model, and year of their vehicle.
 *
 * TODO: Impliment a card object
 * TODO: Create a Revi object
 * TODO: Animate a Revi object
 * TODO: Take in name and replace name in next card
 * TODO: Take in make, model, and year and end this screen
 */
export default class Onboarding extends Component {

  /*
   * Static: navigationOptions
   * Author: Elton C. Rego
   *
   * Purpose: To set the navigation bar options for this page
   */
  static navigationOptions = {
    title: 'Welcome',
    header: null,
  };

  /*
   * Method: goToLoginPage()
   * Author: Elton C. Rego
   *
   * Purpose: On invocation, will push the LoginPage
   *   component onto the view stack.
   *   (Loads the screen.)
   */
  goToLoginPage() {
    const { navigate } = this.props.navigation;
    navigate('Login')
  }

  /*
   * Method: render
   * Author: Elton C. Rego 
   *
   * Purpose: Renders the onboarding page.
   *  The onboarding page has nothing right now.
   * 
   */
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.card}>
          <Text style={styles.card_title}>{"It's Me!"}</Text>
          <Image 
            style={styles.revi} 
            source={require('../../../assets/img/car-good.png')} 
          />
          <Text style={styles.card_text}>{"I'm your car!"}</Text>
        </View>
        <TouchableOpacity 
          activeOpacity={0.8} 
          onPress={
            () => this.goToLoginPage()
          }>
          <Text style={styles.button_style}>
            {"Go Back to Login"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

/*
 * Styles for this Page
 * Author: Elton C. Rego
 */
const styles = StyleSheet.create({

  /*
   * Style: Container
   * Author: Elton C. Rego
   * Purpose: This styles the entire background of this page
   */
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GLOBAL.COLOR.DARKGRAY,
  },
  /*
   * Style: scroll
   * Author: Elton C. Rego
   * Purpose: This styles the entire background of the scroll
   */
  scroll: {
    alignContent: 'center',
    flex: 1,
    paddingVertical: 20,
  },
   /*
   * Style: Card
   * Author: Elton C. Rego
   * Purpose: This styles the card view within this page
   */
  card: {
    height: 344,
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius:20,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
   /*
   * Style: Card Title
   * Author: Elton C. Rego
   * Purpose: This styles the card titles on this page
   */
  card_title: {
    fontFamily: 'Nunito',
    fontWeight: '900',
    color: GLOBAL.COLOR.DARKGRAY,
    textAlign: 'center',
    fontSize: 40,
    marginTop: 32,
  },
   /*
   * Style: Card Text
   * Author: Elton C. Rego
   * Purpose: This styles the card descriptions
   */
  card_text: {
    fontFamily: 'Nunito',
    textAlign: 'center',
    color: GLOBAL.COLOR.DARKGRAY,
    fontSize: 20,
    marginBottom: 32,
  },
   /*
   * Style: Revi
   * Author: Elton C. Rego
   * Purpose: This styles the Revis on each card
   */
  revi: {
    resizeMode: 'contain',
    height: 120,
    width: 120,
  },
   /*
   * Style: Button Style
   * Author: Elton C. Rego
   * Purpose: This styles the button to go back to the
   *   Login Page
   */
  button_style: {
    color: GLOBAL.COLOR.GREEN,
    fontFamily: 'Nunito',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 32,
  }

});
