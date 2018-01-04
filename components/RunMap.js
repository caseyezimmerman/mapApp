import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import login from '../actions/authAction';

class RunMap extends Component {
    makeMap(){
        console.log('make map ran');
    }
    render(){
        return(
            <View>
                <Button
                    onPress={this.makeMap}
                    title="Run!"
                    color="#1d4a5f"
                    accessibilityLabel="Make run route"
                />
            </View>
        )
    }
}

export default RunMap;