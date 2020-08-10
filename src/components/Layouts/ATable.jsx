import React, { useEffect } from 'react';
import deleteIcon from '../../images/delete-icon.svg';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mostrarDoctores, mostrarDoctor } from '../../redux/actions/doctorsActions';

const ATable = ({ doctors, mostrarDoctores, doctor_details, specialities, mostrarDoctor }) => {

    useEffect(() => {

        console.log("### FROM THE ATABLE ###");
        console.log(doctors);
        mostrarDoctores();

    }, []);

    const options = [
        { value: 'blues', label: 'Blues' },
        { value: 'rock', label: 'Rock' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'orchestra', label: 'Orchestra' }];

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
                                doctors.map((doctor) => <tr role="row" class="even">
                                    <td class="sorting_1"> {doctor.doctor.name} {doctor.doctor.last_name} </td>
                                    <td> {doctor.doctor.tuition} </td>
                                    <td> {doctor.specialty.name} </td>
                                    <td> {doctor.doctor.email} </td>
                                    <td> {doctor.doctor.phone} </td>
                                    <td>
                                        <Link onClick={() => { getDetailDoctor(doctor.doctor.id) }}>Ver detalles</Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-12">
                    <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#doctorsModalXl">Agregar</button>
                </div>
            </div>
            <div class="modal fade" id="doctorsModalXl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" style={{ display: "none" }} aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Nuevo médico</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="">Nombres</label><input class="form-control" id="" type="text" placeholder="Nombres del medico"/>
                                    <label for="">Apellidos</label><input class="form-control" id="" type="text" placeholder="Apellidos del medico"/>
                                    <label for="">Email</label><input class="form-control" id="" type="email" placeholder="Email del medico"/>
                                    <label for="">Teléfono</label><input class="form-control" id="" type="tel" placeholder="Telefono del medico"/>
                                    <label for="">Facebook</label><input class="form-control" id="" type="text" placeholder="Telefono del medico"/>
                                    <label for="">Linkedin</label><input class="form-control" id="" type="text" placeholder="Telefono del medico"/>
                                    <label for="">Descripción</label><textarea class="form-control" id="" type="text" placeholder="Telefono del medico"/>
                                    <label for="">Matrícula</label><input class="form-control" id="" type="number" placeholder="Telefono del medico"/>
                                    <label for="">Sobresaliente</label><input class="form-control" id="" type="check" placeholder="Telefono del medico"/>
                                    <label for="">Especialidad</label>
                                    <Select options = {options} />
                                    <label for="">Registrado</label>
                                    <input class="form-control" id="" type="tel" placeholder="Telefono del medico"/>
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer"><button class="btn btn-primary" type="button" data-dismiss="modal">Cancelar</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    doctors: state.doctors.doctors,
    doctor_details: state.doctors.doctor_details,
    specialities: state.specialities.specialities
})

export default connect(mapStateToProps, { mostrarDoctores, mostrarDoctor })(ATable);