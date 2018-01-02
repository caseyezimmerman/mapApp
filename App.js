import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import Secured from './components/Secured';
 
class App extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Secured />;
        } else {
            return <Login />;
        }
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
export default connect(mapStateToProps)(App);
