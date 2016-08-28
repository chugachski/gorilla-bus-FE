import axios from 'axios';

const Matrix = {

  getTime: function(data) {
    // lat then lng
    console.log("derpppppp", data)
    const endpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=';
    const key = 'AIzaSyD5ZfvxOIfkef7YwfrAOWxniSur8U9Lwzo';
    const fullUrl = endpoint + `${data.lat}|${data.lng}&destinations=${data.stopLat}|${data.stopLon}&key=${key}`;

    return axios({
      method: 'GET',
      url: fullUrl
    }).then(function(res){
      console.log("qwertyui",res)
    });
  }

}

export default Matrix
