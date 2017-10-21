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
  ScrollView,
  Dimensions,
  TextInput,
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
 * TODO: Create a Revi object
 * TODO: Animate a Revi object
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
   * Method: componentDidMount()
   * Author: Elton C. Rego
   *
   * Purpose: When a component specified sucessfully is rendered, 
   *   it runs the action
   */
  componentDidMount() {
    setTimeout(() => {
      this.scrollView.scrollTo({x: -16}) 
    }, 1) // scroll view position fix
  }

   /*
   * Method: constructor(props)
   * Author: Elton C. Rego
   *
   * Purpose: Sets the state text for the card naming
   * props: the properties passed in from the super class (index.js)
   */
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

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


    // Grabs the width of the device screen and sets it to 'width'
    const { width } = Dimensions.get('window');

    return (
      <View style={styles.container}>

        <View style={styles.cards_container}>
        <StatusBar
          barStyle="light-content"
        />
        <ScrollView 
          ref={(scrollView) => { this.scrollView = scrollView; }}
          style={styles.scroll}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={312+32}
          snapToAlignment={"center"}
          showsHorizontalScrollIndicator={false}
          contentInset={{
            top: 0,
            left: 32,
            bottom: 0,
            right: 32,
          }}
        >
          {/* Card 1 */}
          <View style={styles.card}>
            <Text style={styles.card_title}>{"It's Me!"}</Text>
            <Image 
              style={styles.revi} 
              source={require('../../../assets/img/car-good.png')} 
            />
            <Text style={styles.card_text}>{"I'm your car!"}</Text>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <Text style={styles.card_title}>{"My name is.."}</Text>
            <Image 
              style={styles.revi} 
              source={require('../../../assets/img/car-good.png')} 
            />
            <TextInput
              style={styles.card_text_input}
              placeholder="Type in my name!"
              onChangeText={(text) => this.setState({text})}
              underlineColorAndroid={'#ffffff'}
            />
          </View>

          {/* Card 1 */}
          <View style={styles.card}>
            <Text style={styles.card_title}>{this.state.text}</Text>
            <Image 
              style={styles.revi_super} 
              source={require('../../../assets/img/car-super-good.png')} 
            />
            <Text style={styles.card_text}>{"I love it!"}</Text>
          </View>
        </ScrollView>
        </View>

      {/* Go Back Button : DELETE BEFORE PRODUCTION */}
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
   * Purpose: This styles the scroll
   */
  scroll: { },

  /*
   * Style: scroll
   * Author: Elton C. Rego
   * Purpose: This styles the scroll
   */
  cards_container: {
    height: 350,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 32,
  },

   /*
   * Style: Card
   * Author: Elton C. Rego
   * Purpose: This styles the card view within this page
   */
  card: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    width: 312,
    height: 344,
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden',
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
   * Style: Card Text Input
   * Author: Elton C. Rego
   * Purpose: This styles the card descriptions
   */
  card_text_input: {
    fontFamily: 'Nunito',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginBottom: 32,
    borderBottomWidth: 2,
    paddingBottom: 2,
    width: '80%',
    borderColor: GLOBAL.COLOR.GREEN,
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
   * Style: Revi Super
   * Author: Elton C. Rego
   * Purpose: This styles the Revis on each card
   */
  revi_super: {
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
  }

});
