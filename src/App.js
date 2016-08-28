import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GMap from './GMap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GMap />
      </div>
    );
  }
}

export default App;
