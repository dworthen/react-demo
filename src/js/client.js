import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import Layout from './pages/Layout';
import Featured from './pages/Featured';
import Archives from './pages/Archives';
import Settings from './pages/Settings';

const app = document.getElementById('app');
ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" component={Archives}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>, 
app);