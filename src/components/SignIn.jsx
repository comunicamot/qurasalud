import React from 'react';
import logo from '../logo.svg';
import img1 from '../images/image1.jpg';

const SignIn = (props) => {

    const btnSignUp = () => {
        props.setIsRegistering(true);

    }

    return (

        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
            <div className="container">
                <div className="card login-card">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={img1} alt="login" className="login-card-img" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <div className="brand-wrapper">
                                    <img src={logo} alt="logo" className="logo" />
                                </div>
                                <p className="login-card-description">Iniciar sesión en su cuenta</p>
                                <form action="#!">
                                    <div className="form-group">
                                        <label htmlFor="email" className="sr-only">Correo electrónico
                                        </label>
                                        <input type="email" name="email" id="email" className="form-control" placeholder="Correo electrónico" />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="password" className="sr-only">Contraseña</label>
                                        <input type="password" name="password" id="password" className="form-control" placeholder="***********" />
                                    </div>
                                    <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Iniciar sesión" />
                                </form>
                                <a href="#!" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
                                <p className="login-card-footer-text">¿No tienes cuenta? <a href="#" className="text-reset" onClick={() => { btnSignUp() }} >Registrarse aquí</a></p>
                                <nav className="login-card-footer-nav">
                                    <a href="#!">Terminos de uso. </a>
                                    <a href="#!">Politicas de privacidad</a>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>


    )
}

export default SignIn;