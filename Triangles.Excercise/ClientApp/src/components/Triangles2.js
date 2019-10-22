import React, { Component } from 'react';
import TriangleForm2 from './TriangleForm2';


export class Triangles2 extends Component {
  static displayName = Triangles2.name;

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
            <h2>More fun with triangles</h2>
            <p>Get triangle by vertices with side 100px </p>
            <TriangleForm2 /> <br/>
            
      </div>
        
    );
  }
}
