import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
