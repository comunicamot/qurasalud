import React from 'react';

const Sidenav = () => {


    return (
        <div id="layoutSidenav_nav">
            <nav className="sidenav shadow-right sidenav-light">
                <div className="sidenav-menu">
                    <div className="nav accordion" id="accordionSidenav">
                        <div className="sidenav-menu-heading">Paciente</div>
                        <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
                            <div className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
                                Cuenta
                                <div className="sidenav-collapse-arrow"><svg className="svg-inline--fa fa-angle-down fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg></div>
                        </a>
                        <div className="collapse show" id="collapseDashboards" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                                <a className="nav-link active" href="index.html">
                                    Perfil
                                </a>
                                <a className="nav-link" href="dashboard-2.html">
                                    Antecedentes Médicos
                                </a>
                                
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <div className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
                                Citas Médicas
                                <div className="sidenav-collapse-arrow"><svg className="svg-inline--fa fa-angle-down fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg></div>
                        </a>
                        <div className="collapse" id="collapsePages" data-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                                <a className="nav-link" href="pricing.html">
                                    Historial
                                </a>
                                <a className="nav-link" href="invoice.html">
                                    Reservar
                                </a>
                            </nav>
                        </div>


                    </div>
                </div>
                <div className="sidenav-footer">
                    <div className="sidenav-footer-content">
                        <div className="sidenav-footer-subtitle">Logged in as:</div>
                        <div className="sidenav-footer-title">Valerie Luna</div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Sidenav;