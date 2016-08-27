

import React, { Component } from 'react';
import PSMarker from './Marker.js'
import GoogleMap from 'google-map-react';
import './GMap.css'

class GMap extends Component {
  constructor(){
    super()
    this.state = {
      lat: 0,
      lng: 0
    }
  }

  handleClick(event){
    event.preventDefault();
    this.setState({
      lat: 40.7398909,
      lng: -73.989497
    })
  }

  render() {
    return (
      <div className="App">
        <div className="map">
          <button className="coords-swap" onClick={this.handleClick.bind(this)}>Derp</button>
          <GoogleMap bootstrapURLKeys={{
          key: "AIzaSyCip9quQ-ByPTL5EmagCH-Se898CweyyHw"
          }}
           center={{lat:60.960571, lng: -149.141023}}
           zoom={14}
           onGoogleApiLoaded={({map, maps}) => console.log(map, maps)}
                               yesIWantToUseGoogleMapApiInternals >
                               <PSMarker lat={this.state.lat} lng={this.state.lng} />
         </GoogleMap>
    </div>

      </div>
    );
  }
}

export default GMap;
