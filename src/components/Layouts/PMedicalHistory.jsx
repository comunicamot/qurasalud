import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import isLoggedIn from '../../helpers/is_logged_in';
import { Redirect, Link } from 'react-router-dom';
import store from 'store';
import PSidenavMenu from '../Layouts/PSidenavMenu';
import { userLogout } from '../../redux/actions/user/loginActions';
import axios from 'axios'

const PMedicalHistory = ({ history, userLogout }) => {

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
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('USER'));
        setUser(user);
        if (localStorage.getItem('PATIENT')) {
            const patient = JSON.parse(localStorage.getItem('PATIENT'));
            setPatient(patient);
        }
    }, []);
    const handleLogout = () => {
        store.remove('loggedIn');
        userLogout();
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('USER');
        if (localStorage.getItem('PATIENT')) {
            localStorage.removeItem('PATIENT');
        }
        history.push('/login');
    }
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
                                        <div className="dropdown-user-details-name"> {patient.name} {patient.last_name} </div>
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
                            <header class="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
                                <div class="container-fluid">
                                    <div class="page-header-content">
                                        <div class="row align-items-center justify-content-between pt-3">
                                            <div class="col-auto mb-3">
                                                <h1 class="page-header-title">
                                                    <div class="page-header-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                                            Cuenta - Antecedentes Médicos
                                        </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <div class="container mt-4">
                                <nav class="nav nav-borders">
                                    <Link className="nav-link ml-0" to='/profile'>Perfil</Link>
                                    <Link className="nav-link" to='/medical_history'>Antecendentes Médicos</Link>
                                </nav>
                                <hr class="mt-0 mb-4" />
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="card mb-4">
                                            <div class="card-header">Detalles del paciente</div>
                                            <div class="card-body">
                                                <form>
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="antecedentes">Antecedentes médicos</label>
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="check1" type="checkbox" />
                                                            <label class="custom-control-label" for="check1">Custom Checkbox 1</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="check2" type="checkbox" />
                                                            <label class="custom-control-label" for="check2">Custom Checkbox 2</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="inputEmailAddress">Antecedentes Quirúrgicos</label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="small mb-1" for="inputEmailAddress">Alergias a medicinas</label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                    <button class="btn btn-primary" type="button">Guardar cambios</button>
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
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = {
    userLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(PMedicalHistory);