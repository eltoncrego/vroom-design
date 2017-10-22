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
  StatusBar,
  ScrollView,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
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
   * Method: goToLoginPage()
   * Author: Elton C. Rego
   *
   * Purpose: On invocation, will push the LoginPage
   *   component onto the view stack.
   *   (Loads the screen.)
   */
  goToLoginPage() {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

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
    this.state = {
      text: 'My Car',
      show_last_card: false,
    };
  }

  /*
   * Method: nameEntered()
   * Author: Elton C. Rego
   *
   * Purpose: On invocation, show the last card
   *   and scroll to it
   */
  nameEntered() {
    this.scrollView.scrollTo({x: 656+16, y: 0, animated: true});
    this.setState({show_last_card: true});
  }

  goToScrollView() {
    this.scrollView.scrollTo({x: 328+8, y: 0, animated: true});
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

    var last_card = this.state.show_last_card ?
      <View style={styles.card}>
        <Text style={styles.card_title}>{this.state.text}</Text>
          <Image
            style={styles.revi_super}
            source={require('../../../assets/img/car-super-good.png')}
          />
        <Text style={styles.card_text}>{"I love it!"}</Text>
      </View>
      : null;

    // Grabs the width of the device screen and sets it to 'width'
    const { width } = Dimensions.get('window');

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >

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
            left: 16,
            bottom: 0,
            right: 16,
          }}
        >
          {/* Card 1 */}
          <View style={styles.card}>
            <Text style={styles.card_title}>{"Hello!"}</Text>
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
              onSubmitEditing={ () => this.nameEntered()}
            />
          </View>

          {/* Card 3: Hide if no name*/}
          {last_card}
        </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.8}
          onPress={
            () => this.goToScrollView()
        }>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

/*
 * Styles for this Page
 * Author: Elton C. Rego
 */
const styles = StyleSheet.create({

  /*
   * Style: Button
   * Author: Tianyi Zhang
   * Purpose: This styles the Next button
   */

  buttonContainer: {
    backgroundColor: '#2980b9',
    height: 45,
    width: 100,
    padding: 10,
    margin: 5,
    alignSelf: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: '15%',
    right:'35%'
  },

  buttonText: {
    textAlign: 'center',
    color:'#FFFFFF',
    fontWeight:'600',
    fontSize: 20,
  },

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

    inactive: {}
});
