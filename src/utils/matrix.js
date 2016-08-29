import axios from 'axios';

const Matrix = {

  getTime: function(data) {
    // console.log('data', data)
    const endpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=';
    const key = 'AIzaSyD5ZfvxOIfkef7YwfrAOWxniSur8U9Lwzo';
    const fullUrl = endpoint + `${data.props.lat},${data.props.lng}&destinations=${data.props.stopLat},${data.props.stopLon}&key=${key}`;
    // console.log('fullurl:', fullUrl);

    return axios({
      method: 'GET',
      url: fullUrl
    }).then(function(res){
      // console.log('time resp:', res)
      console.log('time / dist:', res.data.rows[0].elements[0].duration.value, res.data.rows[0].elements[0].distance.text)
    });
  },

  getMileMarker: function(oLat, oLng, dLat, dLgn) {
    console.log('oLat:', oLat)
    const endpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=';
    const key = 'AIzaSyD5ZfvxOIfkef7YwfrAOWxniSur8U9Lwzo';
    const fullUrl = endpoint + `${oLat.props},${oLng}&destinations=${dLat},${dLgn}&key=${key}`;
    console.log('MM fullurl:', fullUrl);

    return axios({
      method: 'GET',
      url: fullUrl
    }).then(function(res){
      // console.log('time resp:', res)
      const result = res.data.rows[0].elements[0].distance.value / 1609.34
    });

  }

}

export default Matrix


