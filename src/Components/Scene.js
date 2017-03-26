import React, { Component } from 'react';
import Navigator from 'react-native';
import GitHub from './GitHub';
import HackerNews from './HackerNews';
import Reddit from './Reddit';


export default class Scene extends Component {
    constructor() {
        super();

        this.route_componentes = {
            'github': <GitHub /> ,
            'hackernews': <HackerNews /> ,
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
    }

}