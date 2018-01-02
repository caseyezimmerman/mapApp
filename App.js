import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import Secured from './components/Secured';
import TcombLogin from './components/tcomblogin'
 
class App extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Secured />;
        } else {
            return <TcombLogin />;
        }
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
export default connect(mapStateToProps)(App);
