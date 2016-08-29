import axios from 'axios';

const Matrix = {

  getTime: function(data) {
    // console.log('data', data)
    const method = 'post';
    const url = 'http://localhost:3000/distance';
    const dataObj = {lat: data.props.lat, lng: data.props.lng, stopLat: data.props.stopLat, stopLng: data.props.stopLon};

    // const endpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=';
    // const key = 'AIzaSyD5ZfvxOIfkef7YwfrAOWxniSur8U9Lwzo';
    // const fullUrl = endpoint + `${data.props.lat},${data.props.lng}&destinations=${data.props.stopLat},${data.props.stopLon}&key=${key}`;
    // console.log('fullurl:', fullUrl);

    return axios({
      method: 'POST',
      url: url,
      data: dataObj
    }).then(function(res){
      console.log(res.data);
      // console.log('time resp:', res)
      // console.log('time / dist:', res.data.rows[0].elements[0].duration.value, res.data.rows[0].elements[0].distance.text)
    });
  }

}

export default Matrix
