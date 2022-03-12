import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './index.css';
import Home from './pages/home';
import Members from './pages/members';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
