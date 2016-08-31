
import React, { Component } from 'react';
import Radium from 'radium';
import PSMarker from './Marker.js';
import GoogleMap from 'google-map-react';
import Test from './utils/test';
import ETAComp from './ETAComp.js';
import ShuttleInfo from './ShuttleInfo.js';

const stops = [
  {name: "Seward Hwy", lat: 60.941276, lng: -149.172469, distSew: 0},
  {name: "Forest Service", lat: 60.944388, lng: -149.169983, distSew: 0.2},
  {name: "Telemark", lat: 60.951004, lng: -149.164281, distSew: 0.7},
  // {name: "Double Musky", lat: 60.965727, lng: -149.136103, distSew: 2.2},
  {name: "DownTown", lat: 60.962496, lng: -149.135131, distSew: 2.2},
  {name: "Girdwood School", lat: 60.967425, lng: -149.128348, distSew: 2.6},
  {name: "Alyeska View", lat: 60.960100, lng: -149.115815, distSew: 2.7},
  {name: "Daylodge", lat: 60.958949, lng: -149.112068, distSew: 2.9},
  {name: "Olympic Mountain Loop", lat: 60.960751, lng: -149.110305, distSew: 3.0},
  {name: "Brighton", lat: 60.962321, lng: -149.112084, distSew: 3.1},
  {name: "Tram Lot A", lat: 60.971504, lng: -149.101864, distSew: 4.1},
  {name: "Alyeska Tramway", lat: 60.970598, lng: -149.096939, distSew: 4.2}
];

class GMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      selectedStop: stops[5],
      toSeward: true
    }
  }

  componentDidMount(){
    Test(this)
  }


  render() {
    var styles = {
      map: {
        height: '70vh',
        width: '80vw',
        marginRight: '10vw',
        marginLeft: '10vw',
        marginTop: '30px',
        border: '5px solid #155F7C',
        boxShadow: '0 0 10px #155F7C',
        borderRadius: '1px'
      }
    };

    return (
      <div className="App" style={styles.app}>
        <div className="map" style={styles.map}>
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
            <ShuttleInfo />
        <ETAComp props={this.state}/>
      </div>
    );
  }
}

export default Radium(GMap);



// <button className="coords-swap" onClick={this.handleClick.bind(this)}>Derp</button>
