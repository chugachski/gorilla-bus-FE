

import React, { Component } from 'react';
import PSMarker from './Marker.js'
import GoogleMap from 'google-map-react';
import './GMap.css'
import Test from './utils/test';
import Derp from './Derp.js';

class GMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      stopLat: 0,
      stopLon: 0,
      toSeward: true
    }
  }

  // handleClick(event){
  //   event.preventDefault();
  //   this.setState({
  //     lat: 40.7398909,
  //     lng: -73.989497
  //   })
  // }

  componentDidMount(){
    Test(this)
  }


  render() {
    return (
      <div className="App">
        <div className="map">
          <GoogleMap bootstrapURLKeys={{
            key: "AIzaSyCip9quQ-ByPTL5EmagCH-Se898CweyyHw"
          }}
            center={{lat:60.960571, lng: -149.141023}}
            zoom={13}
            onGoogleApiLoaded={({map, maps}) => console.log(map, maps)}
                                yesIWantToUseGoogleMapApiInternals >
                                <PSMarker lat={this.state.lat} lng={this.state.lng} />
          </GoogleMap>
        </div>
        <Derp props={this.state}/>
      </div>
    );
  }
}

export default GMap;


// <button className="coords-swap" onClick={this.handleClick.bind(this)}>Derp</button>
