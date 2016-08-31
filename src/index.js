import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import Help from './Help.js';
import Contact from './Contact.js';
import About from './About.js';
import GMap from './GMap.js'


ReactDOM.render(

  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="/home" component={GMap} />
      <Route path="/help" component={Help} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
    ,document.getElementById('root')
);
