import React, { Component, useState, useEffect } from 'react';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user/loginActions';

import { Redirect } from 'react-router-dom';

import isLoggedIn from '../../helpers/is_logged_in';

const Login = ({history}) => {

    const [isRegistering, setIsRegistering] = useState(false);

    if (!isLoggedIn) {
        return <Redirect to='/tablero'></Redirect>
    }

    return (
        <div className="bg-primary">
            {
                !isRegistering ? (
                    <SignIn history={history} setIsRegistering={setIsRegistering} userLogin={userLogin}></SignIn>
                ) : (
                        <SignUp setIsRegistering={setIsRegistering}></SignUp>
                    )
            }
        </div>
    )
}

export default Login;