import React, { Component } from 'react';
import Relay from 'react-relay';
import {
    View,
    Text,
} from 'react-native';

export default class GitHub extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Text>GitHub</Text>
            </View>
        )
    }

}