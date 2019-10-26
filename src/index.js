import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Login from './Components/Login';
import Home from './Components/Home';

const routing = (
  <Router>
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Redirect exact from="/" to="login" />
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
