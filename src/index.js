import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
/* CSS's files */
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
/* JS's files */
import $ from 'jquery';
import popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './components/Login';
import Dashboard from './components/User/Dashboard';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route path="/tablero" component={Dashboard}></Route>
          <Redirect path='/**' to='/login'></Redirect>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
