import React, { Component } from 'react';
import NavLink from './NavLink.js';

class App extends Component {

  render() {
    var styles = {
      nav: {
        margin: '0',
        padding: '.3em 0 .3em 0',
        width: '100%',
        textAlign: 'center',
      },
      navListItem: {
        margin: '0',
        padding: '0',
        display: 'inline'
      },
      navLink: {
        margin: '0',
        padding: '.3em .4em .3em .4em',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: 'medium',
        color: 'black'
      }
    };

    return (
      <div className="App">
        <ul className="Nav" role="navigation" style={styles.nav}>
          <li style={styles.navListItem}><NavLink style={styles.navLink} to="/home" onlyActiveOnIndex >Home</NavLink></li>
          <li style={styles.navListItem}><NavLink style={styles.navLink} to="/help">Help</NavLink></li>
          <li style={styles.navListItem}><NavLink style={styles.navLink} to="/contact">Contact</NavLink></li>
          <li style={styles.navListItem}><NavLink style={styles.navLink} to="/about">About</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
