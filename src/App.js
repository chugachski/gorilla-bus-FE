import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GMap from './GMap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GMap
          seward={{lat: 60.941276, lng: -149.172469}}
          tram={{lat: 60.970598, lng: -149.096939}}
          />
      </div>
    );
  }
}

export default App;
