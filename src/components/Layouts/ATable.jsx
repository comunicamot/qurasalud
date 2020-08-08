import React from 'react';
import deleteIcon from '../../images/delete-icon.svg';
import Select from 'react-select';

const ATable = ({ doctors }) => {

    return (
        <>
            <div class="row">
                {/* <div className="col-sm-12 col-md-6">
                    
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="form-inline">
                    <div id="dataTable_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="dataTable"/></label></div>
                    </div>
                </div> */}
                <div class="col-sm-4 col-4">
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
                <div class="col-sm-4 col-4">
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
                <table class="table table-bordered table-hover dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style={{ width: "100%" }}>
                    <thead>
                        <tr role="row">
                            <th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Médico</th>
                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Colegiatura</th>
                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1">Especialidad</th>
                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >E-Mail</th>
                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Telefono</th>
                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr role="row" class="odd">
                            <td class="sorting_1">Airi Satou</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>$162,700</td>
                            <td><div class="badge badge-primary badge-pill">Full-time</div></td>
                            <td>
                                <button class="btn btn-datatable btn-icon btn-transparent-dark mr-2"> <img src={deleteIcon} alt="icon" /> </button>
                            </td>
                        </tr>
                        <tr role="row" class="even">
                            <td class="sorting_1">Angelica Ramos</td>
                            <td>Chief Executive Officer (CEO)</td>
                            <td>London</td>
                            <td>$1,200,000</td>
                            <td><div class="badge badge-primary badge-pill">Full-time</div></td>
                            <td>
                                <button class="btn btn-datatable btn-icon btn-transparent-dark mr-2"> <img src={deleteIcon} alt="icon" /> </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div></div>
        </>
    )
}

export default ATable;