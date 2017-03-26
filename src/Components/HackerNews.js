import React, { Component } from 'react';
import Relay from 'react-relay';
import {
    View,
    Text,
} from 'react-native';
import Item from './Item';


export default class HackerNews extends Component {

    render() {
        console.log('_-_');
        console.log(this.props);
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Text>HackerNews node: </Text>
            </View>
        )
    }

}

Relay.createContainer(HackerNews, {
  fragments: {
    store: () => Relay.QL`
      fragment on HackerNewsAPI {
        item(id: 8863) {
          title,
          score,
          url
          by {
            id
          }
        }
      }
    `,
  },
});


class HackerNewsRoute extends Relay.Route {
  static routeName = 'HackerNewsRoute';
  static queries = {
    store: ((Component) => {
      // Component is our Item
      return Relay.QL`
      query root {
        hn { ${Component.getFragment('store')} },
      }
    `}),
  };
}