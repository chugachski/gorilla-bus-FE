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

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  };

  close = () => {
    this.setState({ isMenuOpen: false })
  };

  click = () => {
    console.log('You clicked an item');
  };

  render(){

//     @include keyframes(bounce) {
// 	0%, 20%, 50%, 80%, 100% {
//     @include transform(translateY(0));
//   }
// 	40% {
//     @include transform(translateY(-30px));
//   }
// 	60% {
//     @include transform(translateY(-15px));
//   }
// }

    var bounceKeyframes = Radium.keyframes({
      	'0%, 20%, 50%, 80%, 100%': { transform: '(translateY(0))' },
      	'40%': { transform: '(translateY(-30px))'},
      	'60%': { transform: '(translateY(-15px))'},
    }, 'bounce');

    var styles= {
      dropButton: {
        background: 'transparent',
        border: 'none',
        fontSize: '35px',
        color: 'white',
        display: 'block',
        margin: 'auto',
        ':hover': {
          animation: 'bounceKeyframes 2s infinite',
          animationName: 'bounceKeyframes'
        },
      },
      infoBox:{
        fontSize: '30px',
        color: 'black',
        backgroundColor: 'white',
        listStyle: 'none',
        textAlign: 'center',
        fontFamily: 'Oswald, sans-serif',
        width: '50vw',
        display: 'inline',
        margin: '0'
      },
      menu: {
        width: '100vw',
      }
    };

    let menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close.bind(this),
      toggle: <button type="button" onClick={this.toggle.bind(this)} style={styles.dropButton}>&#x21D3;</button>,
      align: 'center',
    };

    return(
      <DropdownMenu style={styles.menu}{...menuOptions}>
        <div style={styles.infoBox}>ETA: Derp</div>
        <div style={styles.infoBox}>Bus#: Derpson</div>
      </DropdownMenu>
    )
  }
}

export default Radium(ShuttleInfo);
