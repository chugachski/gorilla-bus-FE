import axios from 'axios';

const Matrix = {

  getTime: function(data) {
    const url = 'http://localhost:3000/distance';
    const dataObj = {lat: data.props.lat, lng: data.props.lng, stopLat: data.props.stopLat, stopLng: data.props.stopLon};


    return axios({
      method: 'POST',
      url: url,
      data: dataObj
    }).then(function(res){
      console.log(res.data);
    });
  }

}

export default Matrix
