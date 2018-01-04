import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

class MapMaker extends Component{
    constructor() {
      super();
    }

// The geolocation api exists on the global navigator object in React Native,
// NOT TO BE CONFUSED WITH REACT NAVIGATION
      // componentDidMount() {
      //   navigator.geolocation.getCurrentPosition(
      //     (position) => {
      //       this.setState({
      //         latitude: position.coords.latitude,
      //         longitude: position.coords.longitude,
      //         error: null,
      //       });
      //     },
      //     (error) => this.setState({ error: error.message }),
      //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      //   );
      // }

    getWaypoints(){
        var latArray = []
        var lngArray = []
        var markerArray = []
        var angle = 90
        var numOfPoints = 6;
        var degreesPerPoint = -5 /numOfPoints;
        var x2;
        var y2;
        var range = 0.11
        var lat = userLat
        var lng = userLng

        for(let i=0; i <= numOfPoints; i++){
        x2 = Math.cos(angle) * range;
        y2 = Math.sin(angle) * range;
        newLat = lat+x2;
        newLng = lng+y2;
        // console.log(typeof newLat);
        // console.log(newLng)

        lat_lng = new google.maps.LatLng(newLat,newLng);
        var marker = new google.maps.Marker({
          position: lat_lng,
          map: map,
          // visibile: false
          
        });
        
        latArray.push(lat_lng.lat()); ////push lats of points we just looped through and placed on map
        lngArray.push(lat_lng.lng());
        markerArray.push(marker);
        angle += degreesPerPoint;


      }
    }

    render() {
    getWaypoints()
    const { region } = this.props;
    console.log(this.props)
    if(this.props.theMap.userLatLng === undefined){
      this.props.theMap.userLatLng = {}
    }else{
      var userLat = this.props.theMap.userLatLng.lat
      var userLng = this.props.theMap.userLatLng.lng
    }
    console.log(this.props.theMap.userLatLng.lat)
    // var userLat = this.props.theMap.userLatLng.lat
    // console.log(userLat)
    // var lat = this.props.theMap.userLatLng.lat
    // var lng = this.props.theMap.userLatLng.lat
    // console.log(lat)
    // console.log(lng)
      return (
      <View style ={styles.container}>
        <Text style={styles.text}></Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: userLat,
            longitude: userLng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: userLat,
            longitude: userLng}}
            title={"title"}
            description={"description"}
         />
        </MapView>
      </View>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        theMap: state.map
    };
}


export default connect(mapStateToProps)(MapMaker)

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




