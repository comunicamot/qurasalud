import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import store from 'store'
import { userLogout } from '../../redux/actions/user/loginActions';

const PSidenavMenu = ({ history }) => {

    const [user, setUser] = useState({
        id: null,
        email: null
    });
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('USER'));
        setUser(user);
    }, []);

    const handleLogout = () => {
        store.remove('loggedIn');
        userLogout();
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('USER');
        localStorage.removeItem('AVATAR');
        history.push('/login');
    }

    return (
        <nav className="sidenav shadow-right sidenav-light">

            <div className="sidenav-menu">
                <div className="nav accordion" id="accordionSidenav">
                    <div className="sidenav-menu-heading">Paciente</div>
                    <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        <div className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
                                    Cuenta
                                    <div className="sidenav-collapse-arrow"><svg className="svg-inline--fa fa-angle-down fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg></div>
                    </a>
                    <div className="collapse show" id="collapse1" data-parent="#accordionSidenav">
                        <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                            <Link className="nav-link" to='/profile'>
                                Perfil
                            </Link>
                            <Link className="nav-link" to='/medical_history'>
                                Antecedentes médicos
                            </Link>
                        </nav>
                    </div>

                </div>
            </div>
            <div className="sidenav-footer">
                <div className="sidenav-footer-content">
                    <div className="sidenav-footer-subtitle">Conectado con:</div>
                    <div className="sidenav-footer-title"> {user.email} </div>
                </div>
            </div>
        </nav>
    )
}

export default PSidenavMenu;