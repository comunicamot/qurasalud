import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
/* CSS's files */
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './css/custom.scss';
/* JS's files */
import $ from 'jquery';
import popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux';
import ADoctors from './components/Layouts/ADoctors';
import ANewDoctor from './components/Layouts/ANewDoctor';
import ADetailsDoctor from './components/Layouts/ADetailsDoctor';
import Perfil from './components/User/Perfil';
import ASpecialities from './components/Layouts/ASpecialities';
import ANewSpeciality from './components/Layouts/ANewSpeciality';
import ADetailsSpeciality from './components/Layouts/ADetailsSpeciality';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route path="/perfil" component={Perfil}></Route>
          <Route path="/medicos" component={ADoctors}></Route>
          <Route path="/nuevo_medico" component={ANewDoctor}></Route>
          <Route path='/medico/detalles/:id' component={ADetailsDoctor}></Route>
          <Route path='/especialidades' component={ASpecialities}></Route>
          <Route path='/nueva_especialidad' component={ANewSpeciality}></Route>
          <Route path='/especialidad/detalles/:id' component={ADetailsSpeciality}></Route>
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
