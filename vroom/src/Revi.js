import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';

GLOBAL = require('./Globals');

export default class Revi extends Component{

  state = {
    body_src: require("../assets/img/car-body.png"),
    face_src: require("../assets/img/car-face-normal.png"),
    face_pos: -208,
    is_happy: false,
  };

  makeSuperHappy() {
    LayoutAnimation.spring();
    this.setState({
      face_src: require("../assets/img/car-face-happy.png"),
      face_pos: -220,
    })
  }

  makeNormal() {
    LayoutAnimation.spring();
    this.setState({
      face_src: require("../assets/img/car-face-normal.png"),
      face_pos: -208,
    })
  }

  /*
   * Method: render
   * Author: Elton C. Rego 
   *
   * Purpose: Renders the Revi object.
   * 
   */
  render() {
    if(this.state.is_happy){
      this.state.is_happy = false;
      return (
        <View style={styles.revi}>
          <TouchableOpacity
            onPress={ () => this.makeNormal() }>
            <Image 
              style={styles.body} 
              source={this.state.body_src} 
            />
            <Image 
                style={styles.wheels} 
                source={require('../assets/img/car-wheels.png')}
            />
            <Image 
                style={[styles.face, {marginTop: this.state.face_pos}]} 
                source={this.state.face_src}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      this.state.is_happy = true;
      return (
        <View style={styles.revi}>
          <TouchableOpacity
            onPress={ () => this.makeSuperHappy() }>
            <Image 
              style={styles.body} 
              source={this.state.body_src} 
            />
            <Image 
                style={styles.wheels} 
                source={require('../assets/img/car-wheels.png')}
            />
            <Image 
                style={[styles.face, {marginTop: this.state.face_pos}]} 
                source={this.state.face_src}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }
}

/*
 * Styles for this Component
 * Author: Elton C. Rego
 */
const styles = StyleSheet.create({
  /*
   * Style: Revi
   * Author: Elton C. Rego
   * Purpose: This styles the revi on each card
   */
  wheels: {
    flex: 1,
    width: '100%',
  },
  /*
   * Style: Wheels
   * Author: Elton C. Rego
   * Purpose: This styles the wheels on each card
   */
  wheels: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '95%',
    marginTop: -160,
    zIndex: 0,
  },
  /*
   * Style: Body
   * Author: Elton C. Rego
   * Purpose: This styles the body on each card
   */
  body: {
    resizeMode: 'contain',
    width: '100%',
    zIndex: 1,
  },
  /*
   * Style: Face
   * Author: Elton C. Rego
   * Purpose: This styles the body on each card
   */
  face: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '80%',
    zIndex: 2,
  },
});