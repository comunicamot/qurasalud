import React from 'react';
import logo from '../logo.svg';
import img1 from '../images/image1.jpg';

const SignUp = (props) => {


    const btnSignIn = () => {
        props.setIsRegistering(false);
    }

    return (
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
            <div className="container">
                <div className="card login-card">
                    <div className="row no-gutters">

                        <div className="col-md-10 offset-md-1">
                            <div className="card-body">
                                <div className="brand-wrapper">
                                    <img src={logo} alt="logo" className="logo" />
                                </div>
                                <p className="login-card-description text-center">Registrar una cuenta</p>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="email" className="sr-only">Correo electrónico
                                        </label>
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Correo electrónico" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="telefono" className="sr-only">Teléfono
                                        </label>
                                            <input type="number" name="telefono" id="telefono" className="form-control" placeholder="999 999 999" />
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="hipertension_arterial" />
                                            <label class="form-check-label" for="hipertension_arterial">Hipertensión arterial</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="direccion" className="sr-only">Dirección
                                        </label>
                                            <input type="text" name="direccion" id="direccion" className="form-control" placeholder="Dirección" />
                                        </div>
                                        <div className="form-group ">
                                            <label htmlFor="password" className="sr-only">Contraseña</label>
                                            <input type="password" name="password" id="password" className="form-control" placeholder="Contraseña" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 offset-md-4">
                                        <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Iniciar sesión" />
                                    </div>
                                </div>

                                <a href="#!" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
                                <p className="login-card-footer-text">¿Ya tienes cuenta? <a href="#" className="text-reset" onClick={() => { btnSignIn() }} >Inicar sesión</a></p>
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

export default SignUp;