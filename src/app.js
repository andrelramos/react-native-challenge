import React, { Component } from 'react';
import { Navigator, Text, TouchableHighlight } from 'react-native';
import Scene from './Scene';
import GitHub from './GitHub';
import HackerNews from './HackerNews';
import Reddit from './Reddit';

export default class Challenge extends Component {
    constructor() {
        super();
        this.routes = [
            GitHub.defaultProps,
            HackerNews.defaultProps,
            Reddit.defaultProps,
        ]
    }

    render() {
        return (
            <Navigator
                initialRoute={this.routes[0]}
                initialRouteStack={this.routes}
                renderScene={(route, navigator) => {
                    return <Scene title={route.title} />
                }}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={{
                            LeftButton: (route, navigator, index, navState) =>
                                { return(
                                    <TouchableHighlight onPress={() => navigator.pop()}>
                                        <Text>Back</Text>
                                    </TouchableHighlight>
                                )},
                            RightButton: (route, navigator, index, navState) =>
                            { return(
                                <TouchableHighlight
                                onPress={() => {
                                    if(index < this.routes.length-1) {
                                        navigator.push(this.routes[index+1])
                                    }
                                }}>
                                    <Text>Next</Text>
                                </TouchableHighlight>
                            )},
                            Title: (route, navigator, index, navState) =>
                                { return (<Text>Challenge !</Text>); },
                        }}
                        style={{backgroundColor: 'gray'}}
                    />
                }
            />
    )}
}
