import React from 'react';

export default class ShakingError extends React.Component {
    constructor() { super(); this.state = { key: 0 }; }

    componentWillReceiveProps() {
    this.setState({ key: (this.state.key +1) });
    }

    render() {
        return <div key={this.state.key} className="bounce">{this.props.text}</div>;
    }
}