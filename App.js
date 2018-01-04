import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './src/components/Login';
import Secured from './src/components/Secured';
// import TcombLogin from './components/tcomblogin'
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import  App2  from './src/components/App2'
import { View, Text, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import SignUp from './src/components/tcomblogin'
import AppRouter from './router'
import MapMaker from './src/components/MapMaker'



const HomeScreen = () => <SignUp />
const MapScreen = () => <App2 />
const MapScreenAgain = () => <MapMaker />


const NavConfig = {
  Home: { screen: SignUp},
  Map: {screen: App2},
  RunningMap: {screen: MapMaker}

}

const AppWithNavigation = TabNavigator(NavConfig)
 
class App extends Component {
    render() {
      console.log(this.props)
       return(
        <View style={{ paddingTop: 40, flex: 1}}>
          <AppWithNavigation />
        </View>  
      )
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}




 
export default connect(mapStateToProps)(App);



