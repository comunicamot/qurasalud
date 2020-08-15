import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mostrarPacientes, eliminarPaciente, mostrarPaciente } from '../../redux/actions/patientsActions';
import Loading from './Loading';

const mapStateToProps = state => ({
    loading: state.patients.loading,
    patients: state.patients.patients
});
const mapDispatchToProps = {
    mostrarPacientes,
    eliminarPaciente
}
const ATablePatients = ({ history, mostrarPacientes, loading, patients, eliminarPaciente }) => {

    const [patientsFiltered, setPatientsFiltered] = useState([]);

    useEffect(() => {
        mostrarPacientes();
    }, []);

    useEffect(() => {
        showDataTable();
    }, [patients]);

    const showDataTable = () => {
        setPatientsFiltered(patients);
    }

    const deletePatient = (id) => {
        var answer = window.confirm("¿Eliminar paciente?")
        if (answer) {
            eliminarPaciente(id);
            mostrarPacientes();
        }
    }

    const onChangeSearch = e => {
        setPatientsFiltered(patients.filter((patient) => {
            return patient.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 || patient.last_name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 || patient.email.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
        }));
    }

    if (loading) {
        return (<Loading />)
    } else {
        return (
            <>
                <div class="row">
                    <div class="col-sm-4 col-4 mb-3">
                        <label>Buscar: </label>
                        <input className="form-control" placeholder="Buscar ..." onChange={onChangeSearch} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <table class="table table-bordered table-hover dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style={{ width: "100%" }}>
                            <thead>
                                <tr role="row">
                                    <th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Nombre</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Apellido</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Email</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Telefono</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Dirección</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="2" colspan="2" >Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patientsFiltered.map((patient) => <tr role="row" class="even">
                                        <td class="sorting_1"> {patient.name} </td>
                                        <td> {patient.last_name} </td>
                                        <td> {patient.email} </td>
                                        <td> {patient.phone} </td>
                                        <td> {patient.address} </td>
                                        <td>
                                            <Link to={`paciente/detalles/${patient.id}`} >Ver detalles</Link>
                                        </td>
                                        <td>
                                            <button class="btn btn-datatable btn-icon btn-transparent-dark" onClick={() => { deletePatient(patient.id) }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-12">
                        <Link className="btn btn-primary" to='/nuevo_paciente'>Agregar paciente</Link>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ATablePatients);