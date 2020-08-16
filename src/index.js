import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
/* CSS's files */
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './css/custom.scss';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
/* JS's files */
import $ from 'jquery';
import popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
