import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import login from '../actions/authAction';
 
class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: ''
        };
    }
 
    userLogin (e) {
        e.preventDefault();
        var name = this.state.username
        var password = this.state.password
        console.log(name)
        console.log(password)
        this.props.onLogin(name);
       
    }
 
    toggleRoute (e) {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        this.setState({ route: alt });
        e.preventDefault();
    }
 
    render () {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        return (
            <ScrollView style={{padding: 20, backgroundColor:'#1d4a5f'}}>
                <Text style={styles.login}>{this.state.route}</Text>
                <TextInput style={styles.input}
                    placeholder='Username'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='email-address'
                    value={this.state.username} 
                    onChangeText={(text) => this.setState({ username: text })} />
                <TextInput style={styles.input}
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    secureTextEntry={true} 
                    value={this.state.password} 
                    onChangeText={(text) => this.setState({ password: text })} />
                <View style={{margin: 7}}/>
                <TouchableOpacity>
                    <Text style={styles.button} onPress={(e) => this.userLogin(e)} title={this.state.route}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.text} onPress={(e) => this.toggleRoute(e)}>{alt}</Text>
            </ScrollView>
        );
    }
}
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); },
        onSignUp: (username, password) => { dispatch(signup(username, password)); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
},
  login: {
    marginTop:90,
    marginBottom:30,
    fontSize: 40,
    textAlign:'center',
    color:'white'
},
  text:{
    fontSize:10,
    marginTop:40,
    color: 'white'

},
  input:{
    fontSize:25,
    marginBottom:30,
    borderWidth:2,
    borderColor: 'transparent',
    width:'90%',
    marginLeft:'5%',
    backgroundColor:'#0e2d3f',
    height:50,
    color:'white'
  },
  button:{
    fontSize:25,
    backgroundColor:'#50dcc1',
    height:40,
    textAlign:'center',
    color:'white',
    fontWeight:'bold'
  },
  placeholder:{
    color:'white'
  }

});
