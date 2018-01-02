import { AppRegistry } from 'react-native';
import App from './App';
import React, { Component } from 'react'
import { Provider } from 'react-redux';
// import store from './redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';

import reduxPromise from 'redux-promise'

// let store = createStore(rootReducer);
const store = applyMiddleware(reduxPromise)(createStore)(rootReducer)

export default class myMapApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('myMapApp', () => myMapApp);



