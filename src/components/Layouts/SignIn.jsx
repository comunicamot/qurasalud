import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user/loginActions';
import store from 'store';
import isLoggedIn from '../../helpers/is_logged_in';
import { Redirect } from 'react-router-dom';
import Footer from './Footer'

const SignIn = ({ history, userLogin, loading_signin, user, error_signin, setIsRegistering }) => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const onSubmit = e => {
        e.preventDefault();
        userLogin(formData);
    }

    if (user) {
        store.set('loggedIn', true);
        localStorage.setItem('TOKEN', user.token);
        localStorage.setItem('USER', JSON.stringify(user.user[0]));

        if (user.paciente) {
            localStorage.setItem('PATIENT', JSON.stringify(user.paciente[0]));
            history.push('/profile');

        } else {
            history.push('/perfil');
        }
        
    }

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const btnSignUp = () => {
        setIsRegistering(true);
    }

    if (loading_signin) {
        return (
            <Loading />
        )
    } else {
        return (
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                                    <div className="card my-5">
                                        <div className="card-body p-5 text-center">
                                            <div className="h3 font-weight-light mb-3">Iniciar sesión</div>
                                            <a className="btn btn-icon btn-facebook mx-1" href="#!"><svg className="svg-inline--fa fa-facebook-f fa-w-10 fa-fw fa-sm" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
                                            <a className="btn btn-icon btn-google mx-1" href="#!"><svg className="svg-inline--fa fa-google fa-w-16 fa-fw fa-sm" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" data-fa-i2svg=""><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg></a>
                                        </div>
                                        <hr className="my-0" />
                                        <div className="card-body p-5">
                                            <form onSubmit={onSubmit}>
                                                <div className="form-group">
                                                    <label className="text-gray-600 small" htmlFor="email">Correo electrónico</label>
                                                    <input className="form-control form-control-solid py-4" type="email" placeholder="" aria-label="Email Address" aria-describedby="email" name="email" onChange={onChange} required />
                                                </div>

                                                <div className="form-group">
                                                    <label className="text-gray-600 small" htmlFor="password">Contraseña</label>
                                                    <input className="form-control form-control-solid py-4" type="password" placeholder="" aria-label="Password" aria-describedby="password" name="password" onChange={onChange} required />
                                                </div>

                                                {
                                                    error_signin ? <div className="alert alert-dark" role="alert">Hubo un error al ingresar con la cuenta. Asegurese de que sea un usuario existente.</div> : <></>
                                                }

                                                <div className="form-group"><a className="small" href="#">¿Olvidaste tu contraseña?</a></div>
                                                <div className="form-group d-flex align-items-center justify-content-between mb-0">
                                                    <div className="custom-control custom-control-solid custom-checkbox">
                                                        <input className="custom-control-input small" id="customCheck1" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="customCheck1">Recordar contraseña</label>
                                                    </div>
                                                    <button className="btn btn-primary">Entrar</button>
                                                </div>
                                            </form>
                                        </div>

                                        <hr className="my-0" />
                                        <div className="card-body px-5 py-4">
                                            <div className="small text-center">
                                                ¿Nuevo usuario?
                                                <a href="javascript:void(0)" onClick={btnSignUp}> Crear una cuenta!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading_signin: state.login.loading_signin,
    user: state.login.user,
    error_signin: state.login.error_signin
});
const mapDispatchToProps = {
    userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);