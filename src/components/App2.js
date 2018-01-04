/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 //this is me pushing something so I don't look like a complete loser
 //now pushing to master bc this is annoying

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import t from 'tcomb-form-native'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import MapAction from '../actions/MapAction'
import { connect } from 'react-redux'



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


console.log("hadhlsadhlashdlksadklasdklashdashdlhkas")

var Form = t.form.Form 
var options = {
    auto: 'placeholders',
}; // optional rendering options (see documentation)

var Person = t.struct({
  currentLocation: t.String,              // a required string
  distance: t.Number,  // an optional string
});






class App extends Component{
  constructor(props) {
    super(props);
      this.state = {
      coordinate: new MapView.AnimatedRegion({
        latitude: 37.78825,
        longitude: -122.4324,
      })
    };
    // this.getWaypoints = this.getWaypoints.bind(this)
  }

  // getWaypoints(){
        // var latArray = []
        // var lngArray = []
        // var markerArray = []
        // var angle = 90
        // var numOfPoints = 6;
        // var degreesPerPoint = -5 /numOfPoints;
        // var x2;
        // var y2;

        // for(let i=0; i <= numOfPoints; i++){
        // x2 = Math.cos(angle) * range;
        // y2 = Math.sin(angle) * range;
        // newLat = lat+x2;
        // newLng = lng+y2;
        // // console.log(typeof newLat);
        // // console.log(newLng)

        // lat_lng = new google.maps.LatLng(newLat,newLng);
        // var marker = new google.maps.Marker({
        //   position: lat_lng,
        //   map: map,
        //   // visibile: false
          
        // });
        
        // latArray.push(lat_lng.lat()); ////push lats of points we just looped through and placed on map
        // lngArray.push(lat_lng.lng());
        // markerArray.push(marker);
        // angle += degreesPerPoint;
      
  // }

  makeMap(e,navigator){
    e.preventDefault()
    console.log(this.refs.form.getComponent('currentLocation'))
    console.log('$$$$$$$$$$$$$$$$$$$$')
    currentLocation = (this.refs.form.getComponent('currentLocation').props.value)
    distance = (this.refs.form.getComponent('distance').props.value)
    console.log(typeof currentLocation)
    this.props.mapAction(currentLocation,distance,navigator)
    // getWaypoints()
  }



  render() {
    const { region } = this.props;
    console.log(this.props)
    return (
      <View style ={styles.container}>
        <Text style={styles.text}></Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: 37.78825,
            longitude: -122.4324}}
            title={"title"}
            description={"description"}
         />
        </MapView>
         <Form style={styles.form} 
            ref="form"
            type={Person}
            options={options}
          />
          <TouchableOpacity>
              <Text style={styles.button} onPress={(e) => this.makeMap(e, this.props.navigation)} title={this.state.route}>PLEASE WORK</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    mapAction: MapAction
  },dispatch)
}


export default connect(null, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
},
  map: {
    // ...StyleSheet.absoluteFillObject,

    height:'200%',
    width: '90%',
    marginBottom: 20

},
  text:{
    fontSize:20,
    marginTop:20,

  }

});