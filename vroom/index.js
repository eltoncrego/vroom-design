import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import Login from './src/components/Login/Login';
import Onboarding from './src/components/Onboarding/Onboarding';

// GLOBAL = require('./src/Globals');


export default class vroom extends Component<{}> {
  // constructor(){
  //   super();
  //   this.state = {
  //     google: require('./assets/img/google_light.png')
  //   }
  // }

  // changeLogo() {
  //   //console.log('state changed!');
  //   this.setState({
  //     google: require('./assets/img/google_light_pressed.png')
  //   });
  // }

  render() {
    return (
        // <TouchableHighlight
        //   onPress={() => this.changeLogo()}
        // >
        //   <Image
        //     source = {this.state.google}
        //   />
        // </TouchableHighlight>
        // <Text style={styles.welcome}>
        //   Welcome to Vroom!
        // </Text>
        // <Text style={styles.instructions}>
        //   powered by React Native
        // </Text>
        <Onboarding/>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: GLOBAL.COLOR.GRAY,
//   },
//   welcome: {
//     fontFamily: 'Nunito',
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: GLOBAL.COLOR.BLUE,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     fontFamily: 'Nunito',
//     textAlign: 'center',
//     color: GLOBAL.COLOR.DARKBLUE,
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('vroom', () => vroom);
