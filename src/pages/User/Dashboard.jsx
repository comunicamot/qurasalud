import React, { useState, useEffect } from 'react';

import '../../css/styles.css';

import Navbar from '../../components/Navbar';
import Sidenav from '../../components/Sidenav';
import Account from '../../components/Account';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import isLoggedIn from '../../helpers/is_logged_in';

const Dashboard = ({history}) => {

  if(!isLoggedIn()){
    return <Redirect to='/'></Redirect>
  }
  
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