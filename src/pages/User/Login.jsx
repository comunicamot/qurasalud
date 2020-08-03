import React, { useState, useEffect } from 'react';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user/loginActions';

const Login = (props) => {

    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div className="bg-primary">
            {
                !isRegistering ? (
                    <SignIn props={props} setIsRegistering={setIsRegistering} userLogin={userLogin}></SignIn>
                ) : (
                    <SignUp setIsRegistering={setIsRegistering}></SignUp>
                )
            }
        </div>
    )
}

export default connect (null, {userLogin})(Login);