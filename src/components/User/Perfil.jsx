import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import isLoggedIn from '../../helpers/is_logged_in';
import { Redirect, Link } from 'react-router-dom';
import store from 'store';
import SidenavMenu from '../Layouts/SidenavMenu';
import PSidenavMenu from '../Layouts/PSidenavMenu';
import adminPng from '../../images/admin.png';
import { userLogout } from '../../redux/actions/user/loginActions';
import axios from 'axios'

const Perfil = ({ history, userLogout }) => {

    const [user, setUser] = useState({
        id: null,
        email: null
    });
    const [patient, setPatient] = useState({
        id: null,
        name: null,
        last_name: null,
        phone: null,
        address: null,
        talla: null,
        peso: null
    });
    const [formDataAdmin, setFormDataAdmin] = useState({
        email: "",
        password: ""
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [editInfo, setEditInfo] = useState(false);
    const [chooseFile, setChooseFile] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('USER'));
        setUser(user);
        if (localStorage.getItem('PATIENT')) {
            const patient = JSON.parse(localStorage.getItem('PATIENT'));
            setPatient(patient);
        }
    }, []);

    if (!isLoggedIn()) {
        return <Redirect to='/login'></Redirect>
    }

    const handleLogout = () => {
        store.remove('loggedIn');
        userLogout();
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('USER');
        localStorage.removeItem('AVATAR');
        history.push('/login');
    }

    const onChangeAdmin = e => {
        setFormDataAdmin({ ...formDataAdmin, [e.target.name]: e.target.value });
    }

    const onSubmitAdmin = e => {
        e.preventDefault();
        // Modify admin information
    }

    const onFileChange = event => {
        // Update the state 
        setSelectedFile(event.target.files[0]);
    };

    const onFileUpload = async () => {
        const formData = new FormData();
        formData.append("avatar", selectedFile, selectedFile.name);
        console.log(selectedFile);

        const token = localStorage.getItem('TOKEN');
        const responseUpload = await axios.post('http://74.207.230.214/api/v1/image', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(responseUpload.data);
        setSelectedFile(null);
    }

    const thisFileUpload = () => {
        document.getElementById("avatar").click();
        setChooseFile(true);
    }

    if (patient.name) {
        return (
            <>
                <div className="nav-fixed">
                    <nav className="topnav navbar navbar-expand shadow navbar-light bg-white" id="sidenavAccordion">
                        <Link className="navbar-brand active" to='/perfil'>Qurasalud</Link>
                        <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2" id="sidebarToggle" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                        <form className="form-inline mr-auto d-none d-md-block">
                            <div className="input-group input-group-joined input-group-solid">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Buscar ..." />
                                <div className="input-group-append">
                                    <div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav align-items-center ml-auto">
                            <li className="nav-item dropdown no-caret mr-3 d-none d-md-inline">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="d-none d-md-inline">
                                        <button className="btn btn-outline-primary rounded-pill" type="button">Reservar cita</button>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item dropdown no-caret mr-3 d-md-none">
                                <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="searchDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a>
                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--fade-in-up" aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100">
                                        <div className="input-group input-group-joined input-group-solid">
                                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-caret mr-3 dropdown-notifications">
                                <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></a>
                                <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
                                    <h6 className="dropdown-header dropdown-notifications-header">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell mr-2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                          Alerts Center
                      </h6>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <div className="dropdown-notifications-item-icon bg-warning"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-details">December 29, 2019</div>
                                            <div className="dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <div className="dropdown-notifications-item-icon bg-info"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg></div>
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-details">December 22, 2019</div>
                                            <div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <div className="dropdown-notifications-item-icon bg-danger"><svg className="svg-inline--fa fa-exclamation-triangle fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg></div>
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-details">December 8, 2019</div>
                                            <div className="dropdown-notifications-item-content-text">Critical system failure, systems shutting down.</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <div className="dropdown-notifications-item-icon bg-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg></div>
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-details">December 2, 2019</div>
                                            <div className="dropdown-notifications-item-content-text">New user request. Woody has requested access to the organization.</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-footer" href="#!">View All Alerts</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-caret mr-3 dropdown-notifications">
                                <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                                <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
                                    <h6 className="dropdown-header dropdown-notifications-header">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                          Message Center
                      </h6>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <img className="dropdown-notifications-item-img" src="https://source.unsplash.com/vTL_qy03D1I/60x60" />
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                            <div className="dropdown-notifications-item-content-details">Emily Fowler · 58m</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <img className="dropdown-notifications-item-img" src="https://source.unsplash.com/4ytMf8MgJlY/60x60" />
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                            <div className="dropdown-notifications-item-content-details">Diane Chambers · 2d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-footer" href="#!">Read All Messages</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-caret mr-2 dropdown-user">
                                <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" /></a>
                                <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                                    <h6 className="dropdown-header d-flex align-items-center">
                                        <img className="dropdown-user-img" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
                                        <div className="dropdown-user-details">
                                            <div className="dropdown-user-details-name"> {patient.name} </div>
                                            <div className="dropdown-user-details-email"> {user.email} </div>
                                        </div>
                                    </h6>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" >
                                        <div className="dropdown-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                          Cuenta
                      </Link>
                                    <button className="dropdown-item" onClick={() => { handleLogout() }}>
                                        <div className="dropdown-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></div>
                          Salir
                      </button>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">

                            <PSidenavMenu />

                        </div>

                        <div id="layoutSidenav_content">

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
                                        <Link className="nav-link ml-0" to='/perfil'>Perfil</Link>
                                        <Link className="nav-link" to='/antecedentes_medicos'>Antecendentes Médicos</Link>
                                    </nav>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="card">
                                                <div className="card-header">Foto de perfil</div>
                                                <div className="card-body text-center">
                                                    <img className="img-account-profile rounded-circle mb-2" src="https://source.unsplash.com/QAB-WJcbgJk/300x300" alt="" />
                                                    <div className="small font-italic text-muted mb-4">JPG o PNG no mayor a 5 MB</div>
                                                    <input type="file" id="avatar" style={{ display: 'none' }} />
                                                    
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
                                                                <input className="form-control" id="firstname" name="firstname" type="text" placeholder="Ingrese sus nombres" value={patient.name} required />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="small mb-1" htmlFor="lastname">Apellidos</label>
                                                                <input className="form-control" id="lastname" name="lastname" type="text" placeholder="Ingrese sus apellidos" value={patient.last_name} required />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="small mb-1" htmlFor="email">Correo electrónico</label>
                                                            <input className="form-control" id="email" name="email" type="email" placeholder="Ingrese su correo electrónico" value={user.email} required />
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label className="small mb-1" htmlFor="size">Talla</label>
                                                                <input className="form-control" id="size" name="size" type="text" placeholder="Ingrese su talla" value={patient.talla} required />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="small mb-1" htmlFor="weight">Peso</label>
                                                                <input className="form-control" id="weight" name="weight" type="text" placeholder="Ingrese su peso" value={patient.peso} required />
                                                            </div>
                                                        </div>

                                                        <div className="form-row">
                                                            <div className="form-group col-md-4">
                                                                <label className="small mb-1" htmlFor="telephone">Telefono</label>
                                                                <input className="form-control" id="telephone" name="telephone" type="tel" placeholder="Ingrese su telefono" value={patient.phone} required />
                                                            </div>
                                                            <div className="form-group col-md-8">
                                                                <label className="small mb-1" htmlFor="address">Dirección</label>
                                                                <input className="form-control" id="address" name="address" type="text" name="address" placeholder="Ingrese su dirección" value={patient.address} required />
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

                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="nav-fixed">
                    <nav className="topnav navbar navbar-expand shadow navbar-light bg-white" id="sidenavAccordion">
                        <Link className="navbar-brand active" to='/tablero'>Qurasalud</Link>
                        <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2" id="sidebarToggle" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                        <form className="form-inline mr-auto d-none d-md-block">
                            <div className="input-group input-group-joined input-group-solid">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav align-items-center ml-auto">
                            <li className="nav-item dropdown no-caret mr-3 d-none d-md-inline">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </a>
                            </li>
                            <li className="nav-item dropdown no-caret mr-3 d-md-none">
                                <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="searchDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a>
                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--fade-in-up" aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100">
                                        <div className="input-group input-group-joined input-group-solid">
                                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-caret mr-3 dropdown-notifications">
                                <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></a>
                                <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
                                    <h6 className="dropdown-header dropdown-notifications-header">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell mr-2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                          Alerts Center
                      </h6>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <div className="dropdown-notifications-item-icon bg-warning"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-details">December 29, 2019</div>
                                            <div className="dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <div className="dropdown-notifications-item-icon bg-info"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg></div>
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-details">December 22, 2019</div>
                                            <div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <div className="dropdown-notifications-item-icon bg-danger"><svg className="svg-inline--fa fa-exclamation-triangle fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg></div>
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-details">December 8, 2019</div>
                                            <div className="dropdown-notifications-item-content-text">Critical system failure, systems shutting down.</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <div className="dropdown-notifications-item-icon bg-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg></div>
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-details">December 2, 2019</div>
                                            <div className="dropdown-notifications-item-content-text">New user request. Woody has requested access to the organization.</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-footer" href="#!">View All Alerts</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-caret mr-3 dropdown-notifications">
                                <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                                <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
                                    <h6 className="dropdown-header dropdown-notifications-header">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                          Message Center
                      </h6>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <img className="dropdown-notifications-item-img" src="https://source.unsplash.com/vTL_qy03D1I/60x60" />
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                            <div className="dropdown-notifications-item-content-details">Emily Fowler · 58m</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-item" href="#!">
                                        <img className="dropdown-notifications-item-img" src="https://source.unsplash.com/4ytMf8MgJlY/60x60" />
                                        <div className="dropdown-notifications-item-content">
                                            <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                            <div className="dropdown-notifications-item-content-details">Diane Chambers · 2d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item dropdown-notifications-footer" href="#!">Read All Messages</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-caret mr-2 dropdown-user">
                                <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" src={adminPng} /></a>
                                <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                                    <h6 className="dropdown-header d-flex align-items-center">
                                        <img className="dropdown-user-img" src={adminPng} />
                                        <div className="dropdown-user-details">
                                            <div className="dropdown-user-details-name"> Admin </div>
                                            <div className="dropdown-user-details-email"> {user.email} </div>
                                        </div>
                                    </h6>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" >
                                        <div className="dropdown-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                                        Cuenta
                                    </Link>
                                    <button className="dropdown-item" onClick={() => { handleLogout() }}>
                                        <div className="dropdown-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></div>
                          Salir
                      </button>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">

                            <SidenavMenu />

                        </div>

                        <div id="layoutSidenav_content">

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
                                        <Link className="nav-link ml-0" to='/perfil'>Perfil</Link>
                                    </nav>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="card">
                                                <div className="card-header">Foto de perfil</div>
                                                <div className="card-body text-center">
                                                    <img className="img-account-profile rounded-circle mb-2" src={adminPng} alt="" />
                                                    <div className="small font-italic text-muted mb-4">JPG o PNG no mayor a 5 MB</div>
                                                    {
                                                        selectedFile ? <div class="alert alert-blue" role="alert"> {selectedFile.name} </div> : <></>
                                                    }
                                                    <input type="file" id="avatar" style={{ display: "none" }} onChange={onFileChange} />
                                                    {
                                                        chooseFile ? <> <div className="btn-group"><button class="btn btn-primary" type="button" onClick={() => { onFileUpload() }}>Guardar</button><button class="btn btn-light" type="button" onClick={() => { setChooseFile(false); setSelectedFile(null) }}>Cancelar</button></div> </> : <button class="btn btn-primary" type="button" onClick={() => { thisFileUpload() }}>Escoger imagen</button>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8">
                                            <div className="card mb-4">
                                                <div className="card-header">Detalles de la cuenta</div>
                                                <div className="card-body">
                                                    {
                                                        editInfo ? <form onSubmit={onSubmitAdmin}>
                                                            <div className="form-group">
                                                                <label className="small mb-1" htmlFor="email">Correo electrónico</label>
                                                                <input type="email" className="form-control" id="email" name="email" placeholder="Correo electrónico del adminitrador" onChange={onChangeAdmin} required />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="small mb-1" htmlFor="password">Nueva Contraseña</label>
                                                                <input type="password" className="form-control" id="password" name="password" placeholder="Nueva contraseña del administrador" onChange={onChangeAdmin} required />
                                                            </div>
                                                            <div className="btn-group"><button className="btn btn-primary" type="submit">Guardar</button><button className="btn btn-light" type="button" onClick={() => { setEditInfo(false) }}>Cancelar</button></div>
                                                        </form> : <form>
                                                                <div className="form-group">
                                                                    <label className="small mb-1" htmlFor="email">Correo electrónico</label>
                                                                    <input className="form-control" id="email" name="email" type="email" defaultValue={user.email} disabled />
                                                                </div>
                                                                <button className="btn btn-primary" type="button" onClick={() => { setEditInfo(true) }}>Editar</button>
                                                            </form>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.login.user
});

export default connect(mapStateToProps, { userLogout })(Perfil);