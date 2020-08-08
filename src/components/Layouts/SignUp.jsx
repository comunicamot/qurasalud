import React, { useState } from 'react';
import Loading from './Loading';
import Footer from './Footer';

import { connect } from 'react-redux';
import { userSignUp } from '../../redux/actions/user/loginActions';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const SignUp = ({ history, setIsRegistering, userSignUp, loading, signup, error }) => {

    const [formError, setFormError] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        telephone: 0,
        address: "",
        password: "",
        confirmPassword: "",
        size: 0,
        weight: 0,
        firstname: "",
        lastname: ""
    });

    const btnSignIn = () => {
        setIsRegistering(false);
    }

    const onSubmit = e => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setFormError(true);
        } else {
            setFormError(false);
            const user = {
                email: formData.email,
                password: formData.password,
                name: formData.firstname,
                last_name: formData.lastname,
                phone: formData.telephone,
                address: formData.address,
                talla: formData.size,
                peso: formData.weight
            }
            userSignUp(user);
        }
    }

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    if (signup) {
        MySwal.fire({
            title: '<strong>Se le ha enviado un enlace de confirmación a su correo electrónico.</strong>',
            icon: 'success',
            html: `<p>a ${formData.email}</p>`
        });
    }

    if (loading) {
        return <Loading />
    } else {
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
                                            <form onSubmit={onSubmit}>
                                                <div class="form-row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="text-gray-600 small" for="firstname">Nombres</label>
                                                            <input class="form-control form-control-solid py-4" type="text" placeholder="" aria-label="firstname" aria-describedby="firstname" name="firstname" onChange={onChange} required />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="text-gray-600 small" for="lastname">Apellidos</label>
                                                            <input class="form-control form-control-solid py-4" type="text" placeholder="" aria-label="lastname" aria-describedby="lastname" name="lastname" onChange={onChange} required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="text-gray-600 small" for="email">Correo electrónico</label>
                                                    <input class="form-control form-control-solid py-4" type="email" placeholder="" aria-label="Email Address" aria-describedby="email" name="email" onChange={onChange} required />
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="text-gray-600 small" for="size">Talla</label>
                                                            <input class="form-control form-control-solid py-4" type="decimal" placeholder="" aria-label="firstname" aria-describedby="size" name="size" onChange={onChange} required />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="text-gray-600 small" for="weight">Peso</label>
                                                            <input class="form-control form-control-solid py-4" type="decimal" placeholder="" aria-label="weight" aria-describedby="weight" name="weight" onChange={onChange} required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label class="text-gray-600 small" for="telephone">Teléfono</label>
                                                            <input class="form-control form-control-solid py-4" type="text" placeholder="" aria-label="Telephone" aria-describedby="telephone" name="telephone" onChange={onChange} required />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="form-group">
                                                            <label class="text-gray-600 small" for="address">Dirección</label>
                                                            <input class="form-control form-control-solid py-4" type="text" placeholder="" aria-label="Address" aria-describedby="address" name="address" onChange={onChange} required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="text-gray-600 small" for="password">Contraseña</label>
                                                            <input class="form-control form-control-solid py-4" type="password" placeholder="" aria-label="Password" aria-describedby="password" name="password" onChange={onChange} required />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="text-gray-600 small" for="confirmPassword">Confirmar contraseña</label>
                                                            <input class="form-control form-control-solid py-4" type="password" placeholder="" aria-label="Confirm Password" aria-describedby="confirmPassword" name="confirmPassword" onChange={onChange} required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group d-flex align-items-center justify-content-between">
                                                    <div class="custom-control custom-control-solid custom-checkbox">
                                                        <input class="custom-control-input small" id="termsAndConditionsCheck" type="checkbox" required />
                                                        <label class="custom-control-label mr-3" for="termsAndConditionsCheck">
                                                            Acepto los
                                                            <a href="#!"> terminos y condiciones</a>
                                                            .
                                                        </label>
                                                    </div>
                                                    <button class="btn btn-primary">Crear cuenta</button>
                                                </div>
                                            </form>
                                            {
                                                formError ? <div class="alert alert-dark" role="alert">Las contraseñas no coinciden.</div> : <></>
                                            }
                                            {
                                                error ? <div class="alert alert-dark" role="alert">No se pudo registrar el usuario. Asegurese de que el correo electrónico no esté en uso.</div> : <></>
                                            }
                                        </div>
                                        <hr class="my-0" />
                                        <div class="card-body px-5 py-4">
                                            <div class="small text-center">
                                                ¿Ya tiene una cuenta?
                                                <a href="javascript:void(0)" onClick={() => btnSignIn()}> Ingresar!</a>
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
    loading: state.login.loading,
    signup: state.login.signup,
    error: state.login.error
})

const mapDispatchToProps = {
    userSignUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);