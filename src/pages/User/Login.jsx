import React, { useState, useEffect } from 'react';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user/loginActions';

import { Redirect } from 'react-router-dom';

const Login = ({ history, loggedIn }) => {

    const [isRegistering, setIsRegistering] = useState(false);

    if (loggedIn) {
        <Redirect to='/tablero'></Redirect>
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

const mapStateToProps = state => ({
    loggedIn: state.login.loggedIn
})

const mapDispatchToProps = {
    userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);