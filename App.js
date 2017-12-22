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
  TextInput,
  TouchableOpacity
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';



export default class App extends Component{
  render() {
    const { region } = this.props;
    return (
      <View style ={styles.container}>
        <Text style={styles.text}>STUPID RUNNING APP</Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        ></MapView>
        <Text>Location:</Text>
        <TextInput style={styles.input}/>
        <Text>Distance:</Text>
        <TextInput style={styles.input}/>
        <TouchableOpacity>
          <Text style={styles.button}>Run</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
},
  map: {
    // ...StyleSheet.absoluteFillObject,
    height:'60%',
    width: '90%',
    marginBottom:20
},
  text:{
    fontSize:20,
    marginBottom:10
  },
   input:{
    borderColor:'black',
    borderWidth:1,
    height:35,
    width:200,
    // marginLeft:50,
    marginBottom:10,
    shadowOffset: {width: 0.5, height: 0.5, },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    borderRadius:5
  },
    button:{
    backgroundColor:'teal',
    color:'white',
    height:35,
    lineHeight:30,
    marginTop: 15,
    textAlign:'center',
    width:55,
    // marginLeft:65,
    fontSize:17,
    borderRadius:10
  }

});
