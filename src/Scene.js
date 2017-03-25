import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator
} from 'react-native';
import GitHub from './Components/GitHub';
import HackerNews from './Components/HackerNews';
import Reddit from './Components/Reddit';

export default class Scene extends Component {
    constructor() {
        super();

        this.route_componentes = {
            'github': <GitHub />,
            'hackernews': <HackerNews />,
            'reddit': <Reddit />
        }
    }

    static get defaultProps() {
        return { title: 'MyScene' };
    }

    render() {
        let route = this.props.route;
        let route_lower_title = route.title.toLowerCase();

        return (
            this.route_componentes[route_lower_title]
        )
        
        /*return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Text>{this.props.route.title}</Text>
            </View>
        )*/
    }

}
