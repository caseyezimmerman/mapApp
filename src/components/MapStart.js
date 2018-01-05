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

var Form = t.form.Form 
var options = {
    auto: 'placeholders',
};

var Person = t.struct({
  currentLocation: t.String,
  distance: t.Number,
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
  }

  makeMap(e,navigator){
    e.preventDefault()
    currentLocation = (this.refs.form.getComponent('currentLocation').props.value)
    distance = (this.refs.form.getComponent('distance').props.value)
    this.props.mapAction(currentLocation,distance,navigator)
  }

  render() {
    const { region } = this.props;
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
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
},
  map: {
    height:'200%',
    width: '90%',
    marginBottom: 20
},
  text:{
    fontSize:20,
    marginTop:20,
  }
});