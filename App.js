import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import Secured from './components/Secured';
// import TcombLogin from './components/tcomblogin'
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import App2 from './components/App2'
import { View, Text, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import SignUp from './components/tcomblogin'
import AppRouter from './router'



const HomeScreen = () => <SignUp />
const MapScreen = () => <App2 />

const NavConfig = {
  Home: { screen: HomeScreen},
  Map: {screen: MapScreen}
}

const AppWithNavigation = TabNavigator(NavConfig)
 
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



