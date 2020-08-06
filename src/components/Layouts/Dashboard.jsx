import React, { useState, useEffect } from 'react';

import '../../css/styles.css';

import Navbar from './Navbar';
import Sidenav from './Sidenav';
import Account from '../User/Account';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import isLoggedIn from '../../helpers/is_logged_in';

const Dashboard = ({history}) => {
  
  return (
    <>
      <div className="nav-fixed">
        <Navbar history={history} />
        <div id="layoutSidenav">
          <Sidenav></Sidenav>
          <Account></Account>
        </div>
      </div>
    </>
  )
}

export default Dashboard;