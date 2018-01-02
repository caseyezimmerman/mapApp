import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { login } from '../actions/authAction';
import t from 'tcomb-form-native'
import _ from 'lodash'
import { bindActionCreators } from 'redux'



const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textbox.normal.marginBottom = 5;
stylesheet.textbox.error.marginBottom = 5;
stylesheet.textbox.normal.fontSize = 20
stylesheet.textboxView.normal.marginBottom = 30
stylesheet.textboxView.error.marginBottom = 30
stylesheet.textbox.normal.color = 'white'
stylesheet.textbox.normal.placeholderTextColor


var Form = t.form.Form 
var options = {
    auto: 'placeholders',
    stylesheet: stylesheet
}; // optional rendering options (see documentation)

var Person = t.struct({
  name: t.String,              // a required string
  email: t.String,  // an optional string
  password: t.Number,               // a required number
  rememberMe: t.Boolean        // a boolean
});

 
class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: ''
        };
        this.onPress = this.onPress.bind(this)
    }

    userLogin (e) {
        this.props.onLogin(this.state.username, this.state.password);
        e.preventDefault();
        // var name = this.state.username
        // var password = this.state.password
        // console.log(name)
        // console.log(password)
        console.log('jasdlsyairhalkdsaual')
        var name = (this.refs.form.getComponent('name').props.value) 
        var email = (this.refs.form.getComponent('email').props.value)
        var password = (this.refs.form.getComponent('password').props.value)  
        console.log(name)
        console.log(email)
        console.log(password)    
       
    }
 
    toggleRoute (e) {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        this.setState({ route: alt });
        e.preventDefault();
    }

    onPress (e) {
    e.preventDefault()
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%')
    // call getValue() to get the values of the form
    // var value = this.refs.form.getValue();
    // if (value) { // if validation fails, value will be null
      // console.log(value); // value here is an instance of Person
        // }
    }


 
    render () {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        return (
            <ScrollView style={{padding: 20, backgroundColor:'#1d4a5f'}}>
                <Text style={styles.login}>{this.state.route}</Text>
                        <Form style={styles.form} 
                          ref="form"
                          type={Person}
                          options={options}
                        />
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onLogin: login
    },dispatch)
}
 
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onLogin: login
//         // onSignUp: (username, password) => { dispatch(signup(username, password)); }
//     },dispatch)
// }
 
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
    marginTop:50,
    marginBottom:30,
    fontSize: 40,
    textAlign:'center',
    color:'white'
},
  text:{
    // fontSize:10,
    marginTop:40,
    color: 'white'

},
  input:{
    // fontSize:25,
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
    height:50,
    textAlign:'center',
    color:'white',
    fontWeight:'bold'
  },
  placeholder:{
    color:'white'
  },
  form:{
    marginBottom:20,

  }

});