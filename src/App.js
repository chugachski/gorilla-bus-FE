import React, { Component } from 'react';
import NavLink from './NavLink.js';
import Radium from 'radium';

class App extends Component {

  render() {
    var styles = {
      nav: {
        margin: '0',
        padding: '.3em 0 .3em 0',
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Oswald, sans-serif',
      },
      navListItem: {
        margin: '0',
        padding: '.5em .4em .5em .4em',
        display: 'inline',
      },
      navLink: {
        margin: '0',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'white'
      }
    };

    return (

        <div className="App" style={styles.app}>
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

export default Radium(App);
