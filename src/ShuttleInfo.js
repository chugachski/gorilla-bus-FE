import React, { Component } from 'react';

const shuttleH2 = {
  margin: '10px',
  fontSize: '35px',
  width: '50vw'
}

const etaStyle = {
  display: 'inline',
  margin: '10px',
  top: '0px',
  right: '0px',
  width: '25vw'
}

const shuttleInfo = {
  display: 'flex',
  justifyContent: 'space-around'
}

class ShuttleInfo extends Component {

  render(){
    return(
      <div style={shuttleInfo}>
        <h2 style={shuttleH2}>Shuttle: #666</h2>
        <h2 style={etaStyle}>ETA: Calc....</h2>
      </div>
    )
  }
}

export default ShuttleInfo;
