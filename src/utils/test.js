import axios from 'axios';
// import React, { Component } from 'react'

export default function DriverTest(props){
  let toSeward = true;

  const Route = function(){ return [
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
  ]};

  let enRoute = new Route();

  const driving = function(){
    if (!enRoute.length){ // if enRoute array is empty
      enRoute = new Route() // reassign enRoute
      console.log('enroute:', enRoute)

      if (toSeward === true){
        toSeward = false;
      } else {
        toSeward = true;
      }
    };
    if (toSeward === false && enRoute){
      console.log('enroute:', enRoute.length)
      // return enRoute.shift();
      return {
        coords: enRoute.shift(),
        dir: false
      }
      // console.log(enRoute.shift())
    };
    if (toSeward === true && enRoute){
      // console.log(enRoute.pop())
      console.log('enroute:', enRoute.length)
      // return enRoute.pop();
      return {
        coords: enRoute.pop(),
        dir: true
      }
    };
  };

  window.setInterval(function(){
    // let newPos = driving()
    let shuttleData = driving();
    let newPos = shuttleData.coords;
    let currentDir = shuttleData.dir;

      return axios({
        method: 'PUT',
        url: 'http://localhost:3000/shuttles/666',
        data: {new_shuttle_num: 666, new_lat: newPos.lat, new_lng: newPos.lng, new_dir: currentDir, new_driver_id: 2}
      }).then(function(response){
        console.log('update successful');
      });

  }, 5000);

  window.setInterval(function(){
      return axios.get('http://localhost:3000/shuttles/666').then(function(response){
        props.setState({
          lat: response.data[0].lat,
          lng: response.data[0].lng,
          toSeward: response.data[0].toSeward
        })
        console.log('newest coords from db:', response.data[0].lat, response.data[0].lng, response.data[0].toSeward);
      });

  }, 2500);


};
