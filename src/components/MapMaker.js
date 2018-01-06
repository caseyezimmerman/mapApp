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
import MapViewDirections from 'react-native-maps-directions';



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
        var x3
        var y3
        var x4
        var y4
        var range = 0.11
        var lat = userLat
        var lng = userLng
        console.log(lat)
        console.log(lng)

        for(let i=0; i <= numOfPoints; i++){
        //origin 2, first point
        x2 = 0.004
        y2 = -0.005
        newLat = lat+x2;
        newLng = lng+y2;
        // x = 0.01
        // y = 0.01
        // newlat1 = lat+x
        // newlng1 = lng+y
        x3 = -0.0092
        y3 = -0.0096
        newlat2 = lat+x3
        newlng2 = lng+y3
        // origin3
        x4 = 0.002
        y4 = -0.0099
        newlat3 = lat+x4
        newlng3 = lng+y4
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
        return [newLat, newLng,newlat2, newlng2, newlat3, newlng3]
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
      var newlat2 = coorArray[4]
      var newlng2 = coorArray[5]
      var newlat3 = coorArray[6]
      var newlng3 = coorArray[7]
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
    const origin2 = {latitude: newLat, longitude: newLng};
    const destination2 = {latitude: newlat2, longitude: newlng2};
    const origin3 = {latitude: newlat2, longitude: newlng2};
    const destination3 = {latitude: newlat1, longitude: newlng1};
    const origin4 = {latitude: newlat1, longitude: newlng1};
    const destination4 = {latitude: userLat, longitude:userLng};
    const waypoints = {latitude: newlat3, longitude: newlng3};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCOaoP7KuO0wOQ9fiejMot0D57UsaIQqCI';
      return (
      <View style ={styles.container}>
        <Text style={styles.text}></Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: userLat,
            longitude: userLng,
            latitudeDelta: 0.025,
            longitudeDelta: 0.0221,
          }}
          showsUserLocation={true}
          followUserLocation={true}
        >
        <MapView.Marker
            coordinate={{
              latitude: userLat,
              longitude: userLng
            }}
            title={"1"}
            description={"description"}

         />
          <MapView.Marker
            coordinate={{
              latitude: newLat,
              longitude: newLng
            }}
            title={"2"}
            description={"description"}

         />
        <MapView.Marker
            coordinate={{
              latitude: newlat1,
              longitude: newlng1
            }}
            title={"3"}
            description={"description"}

         />
         <MapView.Marker
            coordinate={{
              latitude: newlat2,
              longitude: newlng2
            }}
            title={"4"}
            description={"description"}

         />
         <MapView.Marker
            coordinate={{
              latitude: newlat3,
              longitude: newlng3
            }}
            title={"5"}
            description={"description"}

         />
           <MapViewDirections
              origin={origin}
              destination={destination}
              waypoints={waypoints}
              mode='WALKING'
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="blue"
            />
            <MapViewDirections
              origin={origin2}
              destination={destination2}
              waypoints={waypoints}
              mode='WALKING'
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="red"
            />
            <MapViewDirections
              origin={origin3}
              destination={destination3}
              waypoints={waypoints}
              mode='WALKING'
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="orange"
            />
            <MapViewDirections
              origin={origin4}
              destination={destination4}
              waypoints={waypoints}
              mode='WALKING'
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="purple"
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

