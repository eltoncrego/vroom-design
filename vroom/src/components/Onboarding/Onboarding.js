/*
 * Import all the necessary components for this page.
 * Please delete components that aren't used.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

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
      </View>
    );
  }
}

/*
 * Styles for this Page
 * Author: Elton C. Rego
 * /
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GLOBAL.COLOR.DARKGRAY,
  },
});
