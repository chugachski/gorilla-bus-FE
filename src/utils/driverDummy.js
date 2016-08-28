import axios from 'axios';

let way = 'start';
const route = [
  {lat: 60.940297,lng: -149.173271},
  {lat: 60.940558,lng: -149.173057},
  {lat: 60.940824,lng: -149.172831},
  {lat: 60.941152,lng: -149.172563},
  {lat: 60.941850,lng: -149.172016},
  {lat: 60.942757,lng: -149.171265},
  {lat: 60.944304,lng: -149.169967},
  {lat: 60.945638,lng: -149.168915},
  {lat: 60.947280,lng: -149.167489},
  {lat: 60.949337,lng: -149.165783},
  {lat: 60.951359,lng: -149.163884},
  {lat: 60.953797,lng: -149.160654},
  {lat: 60.955937,lng: -149.157221},
  {lat: 60.959399,lng: -149.151672},
  {lat: 60.961139,lng: -149.147321},
  {lat: 60.962211,lng: -149.142078},
  {lat: 60.962248,lng: -149.137740},
  {lat: 60.961827,lng: -149.133146},
  {lat: 60.961331,lng: -149.128438},
  {lat: 60.960929,lng: -149.124305},
  {lat: 60.960501,lng: -149.119941},
  {lat: 60.960068,lng: -149.115590},
  {lat: 60.959721,lng: -149.112082},
  {lat: 60.961604,lng: -149.112069},
  {lat: 60.963542,lng: -149.112107},
  {lat: 60.964898,lng: -149.109606},
  {lat: 60.966335,lng: -149.106172},
  {lat: 60.967248,lng: -149.102713},
  {lat: 60.968272,lng: -149.100027},
  {lat: 60.969870,lng: -149.099845}
];
let enRoute = route;

const driving = function(){
  if (!enRoute){
    enRoute = route
    if (way === 'start'){
      way = 'end';
    } else {
      way = 'start';
    }
  if (way === 'end'){
    return enRoute.shift();
  }
  if (way === 'start'){
    return enRoute.pop();
  }
};

const sendPos = window.setInterval(function(){

    return axios({
      method: 'PUT',
      url: 'https://localhost:3000/shuttles/666',
      data: driving()
    }).then(function(response){
      console.log(response);
    });

}, 15000);

const sendPos = window.setInterval(function(){

    return axios.get('https://localhost:3000/shuttles/666').then(function(response){
      console.log(response);
    });

}, 5000);
