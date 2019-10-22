import React, { Component } from 'react';

import TriangleForm1 from './TriangleForm1';


export class Triangles extends Component {
  static displayName = Triangles.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
            <h2>Fun with triangles</h2>
            <p>Get triangle by its position</p>
            <TriangleForm1 /> <br/>
            
      </div>
        
    );
  }
}
