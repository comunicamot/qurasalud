import React from 'react';
import logo from '../logo.svg';
import img1 from '../images/image1.jpg';

const SignUp = (props) => {


    const btnSignIn = () => {
        props.setIsRegistering(false);
    }

    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-8 col-lg-9">
                                <div class="card my-5">
                                    <div class="card-body p-5 text-center">
                                        <div class="h3 font-weight-light mb-3">Iniciar sesión</div>
                                        <div class="small text-muted mb-2">Iniciar sesión usando...</div>
                                        <a class="btn btn-icon btn-facebook mx-1" href="#!"><svg class="svg-inline--fa fa-facebook-f fa-w-10 fa-fw fa-sm" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
                                        <a class="btn btn-icon btn-google mx-1" href="#!"><svg class="svg-inline--fa fa-google fa-w-16 fa-fw fa-sm" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" data-fa-i2svg=""><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg></a>
                                    </div>
                                    <hr class="my-0" />
                                    <div class="card-body p-5">
                                        <div class="text-center small text-muted mb-4">...o ingrese su información abajo. </div>
                                        <form>
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="text-gray-600 small" for="firstNameExample">Nombres</label>
                                                        <input class="form-control form-control-solid py-4" type="text" placeholder="" aria-label="First Name" aria-describedby="firstNameExample" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="text-gray-600 small" for="lastNameExample">Apellidos</label>
                                                        <input class="form-control form-control-solid py-4" type="text" placeholder="" aria-label="Last Name" aria-describedby="lastNameExample" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="text-gray-600 small" for="emailExample">Correo electrónico</label>
                                                <input class="form-control form-control-solid py-4" type="text" placeholder="" aria-label="Email Address" aria-describedby="emailExample" />
                                            </div>
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="text-gray-600 small" for="passwordExample">Contraseña</label>
                                                        <input class="form-control form-control-solid py-4" type="password" placeholder="" aria-label="Password" aria-describedby="passwordExample" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="text-gray-600 small" for="confirmPasswordExample">Confirmar contraseña</label>
                                                        <input class="form-control form-control-solid py-4" type="password" placeholder="" aria-label="Confirm Password" aria-describedby="confirmPasswordExample" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group d-flex align-items-center justify-content-between">
                                                <div class="custom-control custom-control-solid custom-checkbox">
                                                    <input class="custom-control-input small" id="customCheck1" type="checkbox" />
                                                    <label class="custom-control-label mr-3" for="customCheck1">
                                                        Acepto los
                                                        <a href="#!">terminos &amp; condiciones</a>
                                                        .
                                                    </label>
                                                </div>
                                                <a class="btn btn-primary" href="auth-login-social.html">Crear cuenta</a>
                                            </div>
                                        </form>
                                    </div>
                                    <hr class="my-0" />
                                    <div class="card-body px-5 py-4">
                                        <div class="small text-center">
                                            ¿Ya tiene una cuenta?
                                            <a href="#" onClick={ () => {btnSignIn()}} > Ingresar!</a>
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

export default SignUp;