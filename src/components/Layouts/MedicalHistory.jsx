import React from 'react';

const MedicalHistory = ({ btnProfile, btnMedicalHistory, optionSidenav }) => {

    return (
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
                    <a className={optionSidenav === 1 ? "nav-link active ml-0" : "nav-link ml-0"} href="javascript:void(0);" onClick={() => { btnProfile() }}>Perfil</a>
                    <a className={optionSidenav === 2 ? "nav-link active" : "nav-link"} href="javascript:void(0);" onClick={() => { btnMedicalHistory() }}>Antecendentes Médicos</a>
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

    )
}

export default MedicalHistory;