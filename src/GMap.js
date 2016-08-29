

import React, { Component } from 'react';
import PSMarker from './Marker.js'
import GoogleMap from 'google-map-react';
import './GMap.css'
import Test from './utils/test';
import Derp from './Derp.js';
import axios from './utils/matrix';

class GMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      toSeward: true,

      lat: 0,
      lng: 0,
      shuttleMileMarker: 0,

      stopLat: 60.945237,
      stopLon: -149.169233,
      stopMileMarker: 0,

      endLat: props.seward.lat,
      endLng: props.seward.lng,
    }
  }

  componentDidMount(){
    Test(this)
  }

  handleEtaClick(e){
    e.preventDefault();

    let shuttleMileMarker = axios.getMileMarker(this.Lat, this.Lng, this.endLat, this.endLng);
    let stopMileMarker = axios.getMileMarker(this.stopLat, this.stopLng, this.endLat, this.endLng);

    console.log('SMM:', shuttleMileMarker)

    this.setState({
      shuttleMileMarker: shuttleMileMarker,
      stopMileMarker: stopMileMarker
    })

    if ((this.toSeward === false && this.stopMileMarker < shuttleMileMarker) || (this.toSeward === true && this.stopMileMarker < this.shuttleMileMarker)){
        let leg1 = axios.getMileMarker(this.lat, this.lng, this.stopLat, this.stopLng);
        return leg1
    } else if ((this.toSeward === false && this.stopMileMarker < this.shuttleMileMarker) || (this.toSeward === true && this.stopMileMarker > shuttleMileMarker)){
      let leg1 = axios.getMileMarker(this.lat, this.lng, this.endLat, this.endLng)
      let leg2 = axios.getMileMarker(this.lat, this.lng, this.stopLat, this.stopLng);
      return leg1 + leg2
    }
  }

  render() {
    return (
      <div className="App">
      <button onClick={(e) => this.handleEtaClick(e)}>ETA</button>
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
