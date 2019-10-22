import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { About } from './components/About';
import { Triangles } from './components/Triangles';
import { Triangles2 } from './components/Triangles2';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Triangles} />
            <Route exact path='/vertices' component={Triangles2} />
        <Route path='/about' component={About} />
      </Layout>
    );
  }
}
