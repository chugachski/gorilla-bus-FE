import React, { Component } from 'react';
import Radium from 'radium';
import DropdownMenu from 'react-dd-menu';
import FontAwesome from 'react-fontawesome'

class ShuttleInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false
    };
  }

  open = () => {
    this.setState({ isMenuOpen: true })
  };

  close = () => {
    this.setState({ isMenuOpen: false })
  };

  click = () => {
    console.log('You clicked an item');
  };

  render(){

    var styles= {
      dropButton: {
        background: 'transparent',
        border: 'none',
        fontSize: '35px',
        color: 'white',
        display: 'block',
        margin: 'auto',
        width: '100vw'
      },
      infoBox:{
        fontSize: '30px',
        color: 'black',
        backgroundColor: 'white',
        listStyle: 'none',
        textAlign: 'left',
        fontFamily: 'Oswald, sans-serif',
        padding: '20px 20px',
        width: '40vw',
        display: 'inline-flex',
        justifyContent: 'center'
      },
      wrapper:{
        display: 'flex',
        justifyContent: 'center'
      }
    };

    let menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close.bind(this),
      toggle: <button className="dropButton" type="button" onMouseOver={this.open.bind(this)} onMouseLeave={this.close.bind(this)} style={styles.dropButton}>&#x21D3;</button>,
      align: 'center',
    };

    return(
      <DropdownMenu style={styles.menu}{...menuOptions}>
        <div style={styles.wrapper}>
          <div style={styles.infoBox} onMouseOver={this.open.bind(this)} onMouseLeave={this.close.bind(this)}>ETA: Derp</div>
          <div style={styles.infoBox} onMouseOver={this.open.bind(this)} onMouseLeave={this.close.bind(this)}>Bus#: Derpson</div>
        </div>
    </DropdownMenu>
    );
  }
}

export default Radium(ShuttleInfo);
