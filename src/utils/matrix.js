import axios from 'axios';

const Matrix = {

  getTime: function(data) {
    const url = 'http://localhost:3000/distance';
    const dataObj = {lat: data.lat, lng: data.lng, stopLat: data.selectedStop.lat, stopLng: data.selectedStop.lng};
    return axios({
      method: 'POST',
      url: url,
      responseType: 'json',
      data: dataObj
    });
  },

  sewardDist: function(data) {
    const url = 'http://localhost:3000/distance';
    const dataObj = {lat: data.lat, lng: data.lng, stopLat: 60.941276, stopLng: -149.172469};
    return axios({
      method: 'POST',
      url: url,
      responseType: 'json',
      data: dataObj
    });
  }

}

export default Matrix
