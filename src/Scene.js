import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator
} from 'react-native';

export default class Scene extends Component {
    static get defaultProps() {
        return { title: 'MyScene' };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Text>{this.props.title}</Text>
            </View>
        )
    }

}
