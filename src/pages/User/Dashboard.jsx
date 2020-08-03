import React, { useState, useEffect } from 'react';

import '../../css/styles.css';

import Navbar from '../../components/Navbar';
import Sidenav from '../../components/Sidenav';
import Account from '../../components/Account';

const Profile = () => {


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

export default Profile;