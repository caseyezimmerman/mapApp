/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  constructor(){
    super();
    this.makeMaps = this.makeMaps.bind(this);
  }
  makeMaps(){
    console.log('make the maps')
  }
  render() {
    const { region } = this.props;
    return (
      <View style ={styles.container}>
        <Text style={styles.text}>SMART RUNNING APP</Text>
        <Button
          onPress={this.makeMaps}
          title="Login"
          color="#009688"
          accessibilityLabel="login"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
},
  map: {
    height:'30%',
    width: '90%',

},
  text:{
    fontSize:20,
    marginTop:40,
  }
});
