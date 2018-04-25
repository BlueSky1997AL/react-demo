import React, { Component } from 'react';
import Comp1 from './components/comp1';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="greeting">Hello World!</div>
        <Comp1 />
      </div>
    );
  }
}

export default App;
