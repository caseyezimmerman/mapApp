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
  Image,
  TouchableOpacity
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './containers/NavBar';



export default class App extends Component{
  render() {
    const { region } = this.props;
    return (
      <View style ={styles.container}>
        <NavBar />
        <Text style={styles.text}>STUPID RUNNING APP</Text>
        {/*<MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        ></MapView>*/}
        <Text style={styles.output}>Location:</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.output}>Distance:</Text>
        <TextInput style={styles.input}/>
        <TouchableOpacity>
          <Text style={styles.button}>Run</Text>
        </TouchableOpacity>
        <Image 
          style={styles.stretch}
          source={require('./city4.png')}
        />
       {/*<Image 
          style={styles.stretch}
          source={require('./rebal2.png')}
        />
        <Text style={styles.output}>Login</Text>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: '100%',
  },
  container: {
    // ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#35586c',
    height: '100%',
},
  map: {
    // ...StyleSheet.absoluteFillObject,
    height:'60%',
    width: '90%',
    marginBottom:20
},
  text:{
    fontSize:40,
    marginBottom:10,
    textAlign: 'center',
  },
  input:{
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth:1,
    height:45,
    width:300,
    // marginLeft:50,
    marginBottom:10,
    shadowOffset: {width: 0.5, height: 0.5, },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    borderRadius:5,
    
  },
  output: {
    fontSize: 30,
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
