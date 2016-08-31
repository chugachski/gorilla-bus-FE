import Matrix from './matrix.js';

let distBusToTram = '';
let timeBusToTram = '';
let distStopToTram = '';
let timeStopToTram = '';
let distBusToSew = '';
let timeBusToSew = '';
let distStopToBus = '';
let timeStopToBus = '';
let distStopToSew = '';
let timeStopToSew = '';
let estETA = '';

const eta = function(data){
  Matrix.busSeward(data.props).then(function(res){
    if (res.data.rows[0].elements[0].status === 'OK'){
      distBusToSew = parseFloat(res.data.rows[0].elements[0].distance.text);
      timeBusToSew = parseFloat(res.data.rows[0].elements[0].duration.text);
    }
  });

  Matrix.busStop(data.props).then(function(res){
    if (res.data.rows[0].elements[0].status === 'OK') {
      distStopToBus = parseFloat(res.data.rows[0].elements[0].distance.text);
      timeStopToBus = parseFloat(res.data.rows[0].elements[0].duration.text);
    }
  });

  Matrix.stopSeward(data.props).then(function(res){
    if (res.data.rows[0].elements[0].status === 'OK') {
      distStopToSew = parseFloat(res.data.rows[0].elements[0].distance.text);
      timeStopToSew = parseFloat(res.data.rows[0].elements[0].duration.text);
    }
  });

  Matrix.stopTram(data.props).then(function(res){
    if (res.data.rows[0].elements[0].status === 'OK') {
      distStopToTram = parseFloat(res.data.rows[0].elements[0].distance.text);
      timeStopToTram = parseFloat(res.data.rows[0].elements[0].duration.text);
    }
  });

  Matrix.busTram(data.props).then(function(res){
    console.log(res);
    if (res.data.rows[0].elements[0].status === 'OK') {
      distBusToTram = parseFloat(res.data.rows[0].elements[0].distance.text);
      timeBusToTram = parseFloat(res.data.rows[0].elements[0].duration.text);
    }
  });

  if (distBusToSew > distStopToSew && data.props.toSeward === true) {
    estETA = timeStopToBus;
  };

  if (distBusToSew < distStopToSew && data.props.toSeward === true) {
    estETA = timeBusToSew + timeStopToSew;
  };

  if (distBusToSew > distStopToSew && data.props.toSeward === false) {
    estETA = timeBusToTram + timeStopToTram;
  };

  if (distBusToSew < distStopToSew && data.props.toSeward === false) {
    estETA = timeStopToBus
  };

  console.log("eta: ", estETA, " distToBus: ", distStopToBus);
}

export default eta;
