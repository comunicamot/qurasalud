import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import isLoggedIn from '../../helpers/is_logged_in';
import { Redirect, Link } from 'react-router-dom';
import store from 'store'
import { userLogout } from '../../redux/actions/user/loginActions';
import SidenavMenu from './SidenavMenu';
import Select from 'react-select';
import Loading from '../Layouts/Loading';
import { agregarCita } from '../../redux/actions/citasActions';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { es } from 'date-fns/locale';
import format from 'date-fns/format';
import { DateRange } from 'react-date-range';
import $ from 'jquery';
import validator from 'validator';
import { parseISO } from 'date-fns';
import { mostrarDoctores } from '../../redux/actions/doctorsActions';
import { mostrarPacientes } from '../../redux/actions/patientsActions';

const mapStateToProps = state => ({
    doctors: state.doctors.doctors,
    patients: state.patients.patients
})

const mapDispatchToProps = {
    agregarCita,
    mostrarDoctores,
    mostrarPacientes
}

const ANewMedicalAppoHist = ({ history, mostrarDoctores, doctors, mostrarPacientes, patients }) => {

    const [user, setUser] = useState({
        id: "",
        email: ""
    });
    const [sidenavToggled, setSidenavToggled] = useState(false);
    /**
    * Errors
    */
    const [formError, setFormError] = useState(null);
    /**
    * Speciality Select
    */
    const [specialitySelected, setSpecialitySelected] = useState({
        specialty: ""
    });
    /**
    * Patient Select
    */
    const [patientSelected, setPatientSelected] = useState({
        patient_id: ""
    });
    /**
     * Full Calendar
     */
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState([]);
    /**
     * Schedule Details
     */
    const [appointment, setAppointment] = useState({
        doctor_id: "",
        doctor_email: "",
        doctor_fullname: "",
        turn_id: "",
        turn_status: "",
        start_datetime: "",
        final_datetime: "",
        specialties: ""
    });
    /**
     * FormData
     */
    const [formData, setFormData] = useState({
        "reason_consultation": "",
        "Additional_Information": "",
        "amount": "",
        "payment_type": "",
        "patient_id": "",
        "doctor_turn_id": "",
        "specialty": ""
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('USER'));
        setUser(user);
        mostrarDoctores();
        mostrarPacientes();

    }, []);

    useEffect(() => {

        if (doctors) {
            fillCalendar();
        }

    }, [doctors]);

    const fillCalendar = () => {

        let arrayEvents = [];

        doctors.forEach(doc => {
            doc.turns.forEach(turn => {
                let color = null;
                if (turn.status === 0) {
                    color = "#EC1515";
                } else if (turn.status === 1) {
                    color = "#D0E216";
                }
                arrayEvents.push({ doctor_id: doc.doctor.id, start_datetime: `${turn.date}T${turn.start_time}`, final_datetime: `${turn.date}T${turn.final_hour}`, doctor_fullname: `${doc.doctor.last_name}, ${doc.doctor.name}`, doctor_email: doc.doctor.email, turn_id: turn.id, turn_status: turn.status, specialties: doc.specialties.map(spe => { return spe.name }), title: doc.doctor.last_name, start: `${turn.date}T${turn.start_time}`, end: `${turn.date}T${turn.final_hour}`, color: color });
            });
        });

        setEvents(arrayEvents);
    }

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

    const handleSidenavToggle = () => {
        if (sidenavToggled) {
            setSidenavToggled(false);
        } else {
            setSidenavToggled(true);
        }
    }

    const handleEventClick = (clickInfo) => {
        console.log(clickInfo.event);
        const { doctor_id, doctor_email, doctor_fullname, turn_id, turn_status, start_datetime, final_datetime, specialties } = clickInfo.event._def.extendedProps;
        let eventValues = {
            doctor_id, doctor_email, doctor_fullname, turn_id, turn_status, start_datetime, final_datetime, specialties
        }
        setAppointment(eventValues);
        $("#staticNewAppointment").modal('show');
    }

    const handlePatients = e => {
        const { value } = e;
        setPatientSelected({ patient_id: value });
    }

    const selectPatients = () => {
        const list = []
        patients.forEach(p => {
            list.push({ label: `${p.last_name}, ${p.name}`, value: p.id });
        });
        return list;
    }

    const handleSpecialities = e => {
        const { value } = e;
        setSpecialitySelected({ specialty: value });
    }

    const selectSpecialities = () => {
        const list = []
        appointment.specialties.forEach(p => {
            list.push({ label: p, value: p });
        });
        return list;
    }

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        formData.specialty = specialitySelected.specialty;
        formData.patient_id = patientSelected.patient_id;
        formData.payment_type = 'EFECTIVO';
        
        if (formData.specialty && formData.patient_id) {

        } else {
            setFormError("Rellene los campos obligatorios");
        }
        console.log(formData);
    }

    return (
        <>
            <div className={sidenavToggled ? "nav-fixed sidenav-toggled" : "nav-fixed"}>
                <nav className="topnav navbar navbar-expand shadow navbar-light bg-white" id="sidenavAccordion">
                    <Link className="navbar-brand active" to='/perfil'>Qurasalud</Link>
                    <button onClick={() => { handleSidenavToggle() }} className="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2" id="sidebarToggle" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
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
                            <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" src={localStorage.getItem('AVATAR')} /></a>
                            <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                                <h6 className="dropdown-header d-flex align-items-center">
                                    <img className="dropdown-user-img" src={localStorage.getItem('AVATAR')} />
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
                        <SidenavMenu></SidenavMenu>
                    </div>

                    <div id="layoutSidenav_content">

                        <main>
                            <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                                <div class="container">
                                    <div class="page-header-content pt-4">
                                        <div class="row align-items-center justify-content-between">
                                            <div class="col-auto mt-4">
                                                <h1 class="page-header-title">
                                                    <div class="page-header-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></div>
                                            Citas
                                        </h1>
                                                <div class="page-header-subtitle">Mantenimiento de citas</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <div class="container mt-n10">
                                <div className="card mb-4 card-waves">
                                    <div className="card-header">Reservar cita</div>
                                    <div className="card-body">
                                        <FullCalendar
                                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                            headerToolbar={{
                                                left: 'prev,next today',
                                                center: 'title',
                                                right: 'dayGridMonth,timeGridWeek,timeGridDay'
                                            }}
                                            locale={es}
                                            initialView="dayGridMonth"
                                            selectable={true}
                                            editable={true}
                                            selectMirror={true}
                                            eventClick={handleEventClick}
                                            events={events}
                                        />
                                    </div>
                                </div>
                            </div>
                        </main>

                    </div>

                </div>
            </div>
            <div class="modal fade" id="staticNewAppointment" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Registrar una cita</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <div class="modal-body">
                            {
                                appointment.turn_status === 1 ? <form onSubmit={onSubmit}>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="">Razón de la consulta*</label>
                                                <input type="text" className="form-control" id="reason_consultation" name="reason_consultation" onChange={onChange} required />
                                                <label htmlFor="">Información adicional</label>
                                                <textarea className="form-control" id="Additional_Information" name="Additional_Information" onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="">Paciente*</label>
                                                <Select id="patient_id" name="patient_id" options={selectPatients()} onChange={handlePatients} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="">Especialidad*</label>
                                                <Select id="specialty" name="specialty" options={selectSpecialities()} onChange={handleSpecialities} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <label>Monto</label>
                                            <input type="text" className="form-control" disabled id="amount" name="amount" onChange={onChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Tipo de pago</label>
                                            <input type="text" className="form-control" disabled id="payment_type" name="payment_type" defaultValue="EFECTIVO" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            {
                                                formError ? <div class="alert alert-warning mt-2" role="alert"> {formError} </div> : <></>
                                            }
                                            <div className="btn-group mt-2">
                                                <button type="submit" className="btn btn-primary" >Reservar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form> : <div class="alert alert-pink" role="alert">La cita ya está ocupada.</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ANewMedicalAppoHist);