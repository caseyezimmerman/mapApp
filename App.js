import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './src/components/Login';
import Secured from './src/components/Secured';
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import  MapStart  from './src/components/MapStart'
import { View, Text, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import SignUp from './src/components/tcomblogin';
import AppRouter from './router';
import MapMaker from './src/components/MapMaker';

const HomeScreen = () => <SignUp />
const MapStartScreen = () => <MapStart />
const MapMakerScreen = () => <MapMaker />

// adjust this for navbar
const NavBarConfig = {
  Home: { 
    screen: SignUp,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name={focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: focused ? '#33A3F4' : '#949494' }}
        />
      ),
    }
  },
  Map: { 
    screen: MapStartScreen
  },
  RunningMap: { 
    screen: MapMakerScreen
  }
}

// adjust this for styles
const styleNavConfig = {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
}

const AppWithNavigation = TabNavigator(NavBarConfig, styleNavConfig)
 
class App extends Component {
  render() {
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



