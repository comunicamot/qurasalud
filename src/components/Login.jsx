import React, { Component, useState, useEffect } from 'react';
import SignIn from './Layouts/SignIn';
import SignUp from './Layouts/SignUp';
import isLoggedIn from '../helpers/is_logged_in';
import { Redirect } from 'react-router-dom';

const Login = ({ history }) => {

    const [isRegistering, setIsRegistering] = useState(false);

    if (isLoggedIn()) {
        return <Redirect to="/tablero" />;
    }

    if(isRegistering) {
        return(
            <div className="bg-primary">
                <SignUp history={history} setIsRegistering={setIsRegistering}></SignUp>
            </div>
        )
    } else {
        return (
            <div className="bg-primary">
                <SignIn history={history} setIsRegistering={setIsRegistering}></SignIn>
            </div>
        )
    }
    
}

export default Login;