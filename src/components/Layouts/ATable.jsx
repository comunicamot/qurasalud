import React, { useEffect } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mostrarDoctores, mostrarDoctor, eliminarDoctor } from '../../redux/actions/doctorsActions';
import Loading from '../Layouts/Loading';

const ATable = ({ doctors, mostrarDoctores, specialities, eliminarDoctor, loading }) => {

    useEffect(() => {

        console.log("### FROM THE ATABLE ###");
        console.log(doctors);
        mostrarDoctores();

    }, []);

    const deleteDoctor = id => {

        var answer = window.confirm("¿Eliminar medico?")
        if (answer) {
            eliminarDoctor(id);
            mostrarDoctores();
        }
    }

    if(loading){
        return (<Loading/>)
    }else{
    return (
        <>
            <div class="row">
                <div class="col-sm-4 col-12">
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

            <div class="row">
                <div class="col-sm-12">
                    <table class="table table-bordered table-hover dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style={{ width: "100%" }}>
                        <thead>
                            <tr role="row">
                                <th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Médico</th>
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Colegiatura</th>
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1">Especialidad</th>
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >E-Mail</th>
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Telefono</th>
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="2" colspan="2" >Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors.map((doctor) => <tr role="row" class="even">
                                    <td class="sorting_1"> {doctor.doctor.name} {doctor.doctor.last_name} </td>
                                    <td> {doctor.doctor.tuition} </td>
                                    <td> {doctor.specialty.name} </td>
                                    <td> {doctor.doctor.email} </td>
                                    <td> {doctor.doctor.phone} </td>
                                    <td>
                                        <Link to={`medico/detalles/${doctor.doctor.id}`} >Ver detalles</Link>
                                    </td>
                                    <td>
                                    <button class="btn btn-datatable btn-icon btn-transparent-dark" onClick={()=>{deleteDoctor(doctor.doctor.id)}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-12">
                    <Link className="btn btn-primary" to='/nuevo_medico'>Agregar medico</Link>
                </div>
            </div>
        </>
    )
    }
}

const mapStateToProps = state => ({
    doctors: state.doctors.doctors,
    loading: state.doctors.loading,
    doctor_details: state.doctors.doctor_details,
    specialities: state.specialities.specialities
})

export default connect(mapStateToProps, { mostrarDoctores, mostrarDoctor, eliminarDoctor})(ATable);