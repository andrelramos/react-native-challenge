import React, { Component } from 'react';

export default class HackerNews extends Component {

    static get defaultProps() {
        return {
            title: 'HackerNews',
            index: 1,
        };
    }

}
