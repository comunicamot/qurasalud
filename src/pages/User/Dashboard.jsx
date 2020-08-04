import React, { useState, useEffect } from 'react';

import '../../css/styles.css';

import Navbar from '../../components/Navbar';
import Sidenav from '../../components/Sidenav';
import Account from '../../components/Account';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ loggedIn }) => {

  if (loggedIn) {
    return <Redirect to='/tablero'></Redirect>
  }

  return (
    <>
      <div className="nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidenav></Sidenav>
          <Account></Account>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
})

export default connect(mapStateToProps)(Dashboard);