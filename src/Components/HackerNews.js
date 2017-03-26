import React, { Component } from 'react';
import Relay from 'react-relay';
import {
    View,
    Text,
} from 'react-native';
import ViwerQuery from '/src/Queries/ViwerQuery';
import RelayUtils from '/src/Utils/RelayUtils';
import Item from './Item';


export default class HackerNews extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Text>HackerNews node: {this.props.viewer.data.hn2.nodeFromHnId.id}</Text>
            </View>
        )
    }

}

// Create a Relay.Renderer container
export default createRenderer(HackerNews, {
    queries: ViewerQuery,
    fragments: {
    viewer: () => Relay.QL`
        fragment on Viewer {
            nodeFromHnId(id:"rmason", isUserId:true) {
                id
                ... on HackerNewsV2User {
                    submitted(first: 10) {
                        pageInfo {
                            hasNextPage
                            endCursor
                        }
                        edges {
                            cursor
                            node {
                                id
                                ... on HackerNewsV2Story {
                                    score
                                    url
                                }
                                ... on HackerNewsV2Comment {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }`,
    },
});
