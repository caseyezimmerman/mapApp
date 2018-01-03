import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

const store = applyMiddleware(reduxPromise)(createStore)(AppReducer)

export default class myMapApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('myMapApp', () => myMapApp);



