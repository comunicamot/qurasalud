import React from 'react';
import deleteIcon from '../../images/delete-icon.svg';

const Table = () => {

    return (
        <table class="table table-bordered table-hover dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style={{ width: "100%" }}>
            <thead>
                <tr role="row">
                    <th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{ width: "51px" }}>Fecha y Hora</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{ width: "55px" }}>Especialidad</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{ width: "46px" }}>Médico</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{ width: "28px" }}>Estado</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{ width: "55px" }}>Calificación</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{ width: "51px" }}>Opciones</th>
                </tr>
            </thead>
            <tfoot>
                <tr><th rowspan="1" colspan="1">Fecha y Hora</th><th rowspan="1" colspan="1">Especialidad</th><th rowspan="1" colspan="1">Médico</th><th rowspan="1" colspan="1">Estado</th><th rowspan="1" colspan="1">Calificación</th><th rowspan="1" colspan="1">Opciones</th></tr>
            </tfoot>
            <tbody>
                <tr role="row" class="odd">
                    <td class="sorting_1">Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>$162,700</td>
                    <td><div class="badge badge-primary badge-pill">Full-time</div></td>
                    <td>
                        <button class="btn btn-datatable btn-icon btn-transparent-dark mr-2"> <img src={deleteIcon} alt="icon"/> </button>
                    </td>
                </tr>
                <tr role="row" class="even">
                    <td class="sorting_1">Angelica Ramos</td>
                    <td>Chief Executive Officer (CEO)</td>
                    <td>London</td>
                    <td>$1,200,000</td>
                    <td><div class="badge badge-primary badge-pill">Full-time</div></td>
                    <td>
                    <button class="btn btn-datatable btn-icon btn-transparent-dark mr-2"> <img src={deleteIcon} alt="icon"/> </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;