import React, { useState, useEffect } from 'react';

import logo from '../logo.svg';
import img1 from '../images/image1.jpg';

import { connect } from 'react-redux';
import { userLogin } from '../redux/actions/user/loginActions';

import { useForm } from 'react-hook-form';

import Loading from '../components/Loading';
import store from 'store';

const SignIn = ({ userLogin, loading, user, error, setIsRegistering, history }) => {

    const { register, errors, handleSubmit } = useForm();

    const btnSignUp = () => {
        setIsRegistering(true);
    }

    const onSubmit = (data, e) => {
        userLogin(data);
    }
    
    if(user){
        store.set('loggedIn', true);
        history.push('/tablero');
    }

    if (loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                                    <div class="card my-5">
                                        <div class="card-body p-5 text-center">
                                            <div class="h3 font-weight-light mb-3">Iniciar sesión</div>
                                            <a class="btn btn-icon btn-facebook mx-1" href="#!"><svg class="svg-inline--fa fa-facebook-f fa-w-10 fa-fw fa-sm" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
                                            <a class="btn btn-icon btn-google mx-1" href="#!"><svg class="svg-inline--fa fa-google fa-w-16 fa-fw fa-sm" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" data-fa-i2svg=""><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg></a>
                                        </div>
                                        <hr class="my-0" />
                                        <div class="card-body p-5">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div class="form-group">
                                                    <label class="text-gray-600 small" for="email">Correo electrónico</label>
                                                    <input class="form-control form-control-solid py-4" type="text" placeholder="" aria-label="Email Address" aria-describedby="email" name="email" ref={
                                                        register({
                                                            required: {
                                                                value: true,
                                                                message: "Por favor, ingrese su correo electronico"
                                                            }
                                                        })
                                                    } />
                                                </div>
                                                {
                                                    errors?.email?.message ? (
                                                        <div class="alert alert-dark" role="alert">
                                                            {errors?.email?.message}
                                                        </div>
                                                    ) : <></>
                                                }
                                                <div class="form-group">
                                                    <label class="text-gray-600 small" for="password">Contraseña</label>
                                                    <input class="form-control form-control-solid py-4" type="password" placeholder="" aria-label="Password" aria-describedby="password" name="password" ref={
                                                        register({
                                                            required: {
                                                                value: true,
                                                                message: "Por favor, ingrese su contraseña"
                                                            }
                                                        })
                                                    } />
                                                </div>
                                                {
                                                    errors?.password?.message ? (
                                                        <div class="alert alert-dark" role="alert">
                                                            {errors?.password?.message}
                                                        </div>
                                                    ) : <></>
                                                }
                                                {
                                                    error ? <div class="alert alert-dark" role="alert">Las credenciales son incorrectas.</div> : <></>
                                                }

                                                <div class="form-group"><a class="small" href="#">¿Olvidaste tu contraseña?</a></div>
                                                <div class="form-group d-flex align-items-center justify-content-between mb-0">
                                                    <div class="custom-control custom-control-solid custom-checkbox">
                                                        <input class="custom-control-input small" id="customCheck1" type="checkbox" />
                                                        <label class="custom-control-label" for="customCheck1">Recordar contraseña</label>
                                                    </div>
                                                    <button class="btn btn-primary">Entrar</button>
                                                </div>
                                            </form>
                                        </div>

                                        <hr class="my-0" />
                                        <div class="card-body px-5 py-4">
                                            <div class="small text-center">
                                                ¿Nuevo usuario?
                                                <a href="#" onClick={() => { btnSignUp() }}> Crear una cuenta!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer class="footer mt-auto footer-dark">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6 small">Copyright © Qurasalud 2020</div>
                                <div class="col-md-6 text-md-right small">
                                    <a href="#!">Politicas de privacidad</a>
                                    ·
                                    <a href="#!">Terminos &amp; Condiciones</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    loading: state.login.loading,
    user: state.login.user,
    error: state.login.error
});
const mapDispatchToProps = {
    userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);