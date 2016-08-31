import Matrix from './matrix.js';

let distToSew = '';
let distToBus = '';

const eta = function(data){
  Matrix.sewardDist(data.props).then(function(res){
    distToSew = res.data;
    console.log("Seward Distance: ", parseInt(distToSew.rows[0].elements[0].distance.text));
  });

  Matrix.getTime(data.props).then(function(res){
    distToBus = res.data;
    console.log("Bus Distance: ", parseInt(distToBus.rows[0].elements[0].distance.text));
  });
  console.log(distToSew);

}

export default eta;
