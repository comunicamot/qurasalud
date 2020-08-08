import React from 'react';
import ATable from './ATable'

const AMedicalAppoHist = () => {

    return(
        <main>
            <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                        <div class="container">
                            <div class="page-header-content pt-4">
                                <div class="row align-items-center justify-content-between">
                                    <div class="col-auto mt-4">
                                        <h1 class="page-header-title">
                                            <div class="page-header-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></div>
                                            Citas
                                        </h1>
                                        <div class="page-header-subtitle">Mantenimiento de las citas </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div class="container mt-n10">
                        <div class="card mb-4">
                            <div class="card-header">Extended DataTables</div>
                            <div class="card-body">
                                <div class="datatable">
                                    <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">

                                    <div class="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-inline">
                                            <div className="form-group mb-3">
                                                <label for="">Buscar: </label>
                                                <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm ml-1">
                                                    <option value="cardiologia">Cardiologia</option>
                                                    <option value="ginecologia">Ginecologia</option>
                                                    <option value="neurologia">Neurologia</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-inline">
                                            <div className="form-group mb-3">
                                                <label for="">Buscar: </label>
                                                <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm ml-1">
                                                    <option value="cardiologia">Cardiologia</option>
                                                    <option value="ginecologia">Ginecologia</option>
                                                    <option value="neurologia">Neurologia</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    
                                    <div class="row"><div class="col-sm-12">
                                        
                                        
                                        
                                        </div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0" class="page-link">4</a></li><li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="5" tabindex="0" class="page-link">5</a></li><li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0" class="page-link">6</a></li><li class="paginate_button page-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
        </main>
    );
}

export default AMedicalAppoHist;

