import React, {useEffect, useState} from 'react';
import store from 'store';
import { Redirect } from 'react-router-dom';
import adminPng from '../../images/admin.png'

const Profile = ({btnProfile, btnMedicalHistory, optionSidenav, user, patient}) => {

    const [formError, setFormError] = useState(false);

    const thisFileUpload = () => {
        document.getElementById("avatar").click();
    }

    if(patient.email){
        return (
            <main>
                <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
                    <div className="container-fluid">
                        <div className="page-header-content">
                            <div className="row align-items-center justify-content-between pt-3">
                                <div className="col-auto mb-3">
                                    <h1 className="page-header-title">
                                        <div className="page-header-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                                                Cuenta - Perfil
                                            </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container mt-4">
                    <nav className="nav nav-borders">
                        <a className={optionSidenav === 1 ? "nav-link active ml-0" : "nav-link ml-0"} href="javascript:void(0);" onClick={() => {btnProfile()}}>Perfil</a>
                        <a className={optionSidenav === 2 ? "nav-link active" : "nav-link"} href="javascript:void(0);" onClick={() => {btnMedicalHistory()}}>Antecendentes Médicos</a>
                    </nav>
                    <hr className="mt-0 mb-4" />
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-header">Foto de perfil</div>
                                <div className="card-body text-center">
                                    <img className="img-account-profile rounded-circle mb-2" src="https://source.unsplash.com/QAB-WJcbgJk/300x300" alt="" />
                                    <div className="small font-italic text-muted mb-4">JPG o PNG no mayor a 5 MB</div>
                                    <input type="file" id="avatar" style={{display: 'none'}} />
                                    <button className="btn btn-primary" onClick={()=>{thisFileUpload()}}>Subir nueva imagen</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card mb-4">
                                <div className="card-header">Detalles de la cuenta</div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label className="small mb-1" htmlFor="firstname">Nombres</label>
                                                <input className="form-control" id="firstname" name="firstname" type="text" placeholder="Ingrese sus nombres" value={patient.name} required/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className="small mb-1" htmlFor="lastname">Apellidos</label>
                                                <input className="form-control" id="lastname" name="lastname" type="text" placeholder="Ingrese sus apellidos"  value={patient.last_name} required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="small mb-1" htmlFor="email">Correo electrónico</label>
                                            <input className="form-control" id="email" name="email" type="email" placeholder="Ingrese su correo electrónico"  value={user.email} required/>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label className="small mb-1" htmlFor="size">Talla</label>
                                                <input className="form-control" id="size" name="size" type="text" placeholder="Ingrese su talla"  value={patient.talla} required/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className="small mb-1" htmlFor="weight">Peso</label>
                                                <input className="form-control" id="weight" name="weight" type="text" placeholder="Ingrese su peso"  value={patient.peso} required/>
                                            </div>
                                        </div>
                                        
                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <label className="small mb-1" htmlFor="telephone">Telefono</label>
                                                <input className="form-control" id="telephone" name="telephone" type="tel" placeholder="Ingrese su telefono" value={patient.phone} required/>
                                            </div>
                                            <div className="form-group col-md-8">
                                                <label className="small mb-1" htmlFor="address">Dirección</label>
                                                <input className="form-control" id="address" name="address" type="text" name="address" placeholder="Ingrese su dirección" value={patient.address} required/>
                                            </div>
                                        </div>
    
                                        <button className="btn btn-primary" type="button">Guardar cambios</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    } else {
        return(
            <main>
                <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
                    <div className="container-fluid">
                        <div className="page-header-content">
                            <div className="row align-items-center justify-content-between pt-3">
                                <div className="col-auto mb-3">
                                    <h1 className="page-header-title">
                                        <div className="page-header-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                                                Cuenta - Perfil
                                            </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container mt-4">
                    <nav className="nav nav-borders">
                        <a className={optionSidenav === 1 ? "nav-link active ml-0" : "nav-link ml-0"} href="javascript:void(0);" onClick={() => {btnProfile()}}>Perfil</a>
                    </nav>
                    <hr className="mt-0 mb-4" />
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-header">Foto de perfil</div>
                                <div className="card-body text-center">
                                    <img className="img-account-profile rounded-circle mb-2" src={adminPng} alt="" />
                                    <div className="small font-italic text-muted mb-4">JPG o PNG no mayor a 5 MB</div>
                                    <input type="file" id="avatar" style={{display: 'none'}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card mb-4">
                                <div className="card-header">Detalles de la cuenta</div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label className="small mb-1" htmlFor="email">Correo electrónico</label>
                                            <input className="form-control" id="email" name="email" type="email" placeholder="Ingrese su correo electrónico"  value={user.email} required/>
                                        </div>
    
                                        <button className="btn btn-primary" type="button">Guardar cambios</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Profile;