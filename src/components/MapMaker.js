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
import WaypointsAction from '../actions/WaypointsActions'
import { bindActionCreators } from 'redux'
// import MapViewDirections from 'react-native-maps-directions';

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

      getWaypoints(userLat, userLng){
        console.log("waypoints")
        var latArray = []
        var lngArray = []
        var markerArray = []
        var angle = 90
        var numOfPoints = 6;
        var degreesPerPoint = -5 /numOfPoints;
        var x2;
        var y2;
        var x
        var y
        var range = 0.11
        var lat = userLat
        var lng = userLng
        console.log(lat)
        console.log(lng)

        for(let i=0; i <= numOfPoints; i++){
        x2 = 0.001
        y2 = 0.001
        newLat = lat+x2;
        newLng = lng+y2;
        x = 0.01
        y = 0.01
        newlat1 = lat+x
        newlng1 = lng+y
        // console.log(typeof newLat);
        // console.log(newLng)

        // lat_lng = new google.maps.LatLng(newLat,newLng);
        // var marker = new google.maps.Marker({
        //   position: lat_lng,
        //   map: map,
        //   // visibile: false
          
        // });
        console.log(newLat)
        console.log(newLng)
        return [newLat, newLng, newlat1, newlng1]
        // latArray.push(lat_lng.lat()); ////push lats of points we just looped through and placed on map
        // lngArray.push(lat_lng.lng());
        // markerArray.push(marker);
        // angle += degreesPerPoint;
      }
    }

    render() {
    const { region } = this.props;
    console.log(this.props)
    if(this.props.theMap.userLatLng === undefined){
      this.props.theMap.userLatLng = {}
    }else{
      var userLat = this.props.theMap.userLatLng.lat
      var userLng = this.props.theMap.userLatLng.lng
      var coorArray = this.getWaypoints(userLat, userLng)
      console.log(coorArray)
      var newLat = coorArray[0]
      var newLng = coorArray[1]
      var newlat1 = coorArray[2]
      var newlng1 = coorArray[3]
    }
    console.log(this.props.theMap.userLatLng.lat)
    // var userLat = this.props.theMap.userLatLng.lat
    // console.log(userLat)
    // var lat = this.props.theMap.userLatLng.lat
    // var lng = this.props.theMap.userLatLng.lat
    // console.log(lat)
    // console.log(lng)
    // const markers = [
    // {
    //   coordinates:{
    //     latitude: userLat,
    //     longitude: userLng
    //   },
    //   coordinates:{
    //     latitude: newLat,
    //     longitude: newLng
    //   }

    // }]
    // console.log(markers.coordinates)
    const origin = {latitude: userLat, longitude: userLng};
    const destination = {latitude: newLat, longitude: newLng};
    const waypoints = {latitude: newlat1, longitude: newlng1};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCOaoP7KuO0wOQ9fiejMot0D57UsaIQqCI';
      return (
      <View style ={styles.container}>
        <Text>We Tried</Text>
      </View>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        theMap: state.map
    };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getWaypoints: WaypointsAction
  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(MapMaker)

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


        // <MapView.Marker
        //     coordinate={{
        //       latitude: newLat,
        //       longitude: newLng 
        //     }}
        //     title={"title"}
        //     description={"description"}

        //  />

