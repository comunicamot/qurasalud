import React, { useState, useEffect } from 'react';
import '../css/Login.css';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Login = () => {


    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <>
            {
                !isRegistering ? (
                    <SignIn setIsRegistering={setIsRegistering}></SignIn>
                ) : (
                        <SignUp setIsRegistering={setIsRegistering}></SignUp>
                    )
            }

        </>
    )
}

export default Login;