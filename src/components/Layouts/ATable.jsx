import React, {useEffect} from 'react';
import deleteIcon from '../../images/delete-icon.svg';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mostrarDoctor } from '../../redux/actions/doctorsActions';

const ATable = ({ doctors, mostrarDoctor, doctor_details }) => {

    useEffect(()=>{

        console.log("### FROM THE ATABLE ###");
        console.log(doctors);
        console.log(doctor_details);

    }, [doctors, doctor_details]);

    const getDetailDoctor = (id) => {
        console.log("### WE HAVE TO GET THE ID ###");
        console.log(id);
        mostrarDoctor(id);
    }
    
    return (
        <>
            <div class="row">
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
                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor) =>  <tr role="row" class="even">
                            <td class="sorting_1"> {doctor.doctor.name} {doctor.doctor.last_name} </td>
                            <td> {doctor.doctor.tuition} </td>
                            <td> {doctor.specialty.name} </td>
                            <td> {doctor.doctor.email} </td>
                            <td> {doctor.doctor.phone} </td>
                            <td>
                                <Link onClick={()=>{getDetailDoctor(doctor.doctor.id)}}>Ver detalles</Link>
                            </td>
                        </tr> )
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-sm-12">
                    <button >Agregar</button>
            </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    doctor_details: state.doctors.doctor_details
})

export default connect(mapStateToProps, {mostrarDoctor})(ATable);