import React, { Component } from 'react';
import './App.css';
import NavLink from './NavLink.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="Nav" role="navigation">
          <li><NavLink to="/home" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/help">Help</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
