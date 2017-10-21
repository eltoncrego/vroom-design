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

const vroom = StackNavigator({
  // DEBUG: Uncomment Following Line to Test Revi
  // Revi: {screen: Revi},
  Login: {screen: Login},
  Onboarding: {screen: Onboarding},
});


/*
 * Class: vroom
 * Author: Connick Shields & Elton C. Rego
 *
 * Purpose: Renders the default page of the application.
 *   In this case, the default page is the Login page.
 *
 * TODO: Add logic to determine if a user is already
 *   logged in.
 * TODO: Imliment legitimate login page.
 *
 */
// export default class vroom extends Component<{}> {

  /*
   * Method: render
   * Author: Connick Shields & Elton C. Rego
   *
   * Purpose: Renders the navigator object.
   *   The navigator object will run the Login
   *   component and allows us to navigate between
   *   pages in the application.
   *
   * TODO: Verify if user is already logged in before
   *   determining which page to render.
   */
//   render() {
//     return (
//         <NavigatorIOS
//           style = {styles.container}
//           initialRoute={{
//             title: "Login Page",
//             navigationBarHidden: true,
//             component: Login
//         }}/>

//     );
//   }
// }

/*
 * StyleSheet: styles
 * Author: Connick Shields
 * 
 * Purpose: Creates the styling rules for the overall 
 *   application.
 */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });

AppRegistry.registerComponent('vroom', () => vroom);
