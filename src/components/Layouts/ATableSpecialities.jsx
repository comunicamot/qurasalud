import React, { useEffect } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mostrarEspecialidades, eliminarEspecialidad, mostrarEspecialidad } from '../../redux/actions/specialitiesActions';
import Loading from '../Layouts/Loading';

const ATableSpecialities = ({ mostrarEspecialidades, specialities, eliminarEspecialidad, loading, history }) => {

    useEffect(() => {

        console.log("### FROM ATABLASPECIALITIES ###");
        console.log(specialities);
        
        setTimeout(mostrarEspecialidades, 2000);

    }, []);

    const deleteSpeciality = id => {

        var answer = window.confirm("¿Eliminar especialidad?")
        if (answer) {
            eliminarEspecialidad(id);
            setTimeout(mostrarEspecialidades, 2000);
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
                                <th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Nombre</th>
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" >Precio</th>
                                <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="2" colspan="2" >Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                specialities.map((speciality) => <tr role="row" class="even">
                                    <td class="sorting_1"> {speciality.name} </td>
                                    <td> {speciality.price} </td>
                                    <td>
                                        <Link to={`especialidad/detalles/${speciality.id}`} >Ver detalles</Link>
                                    </td>
                                    <td>
                                    <button class="btn btn-datatable btn-icon btn-transparent-dark" onClick={()=>{deleteSpeciality(speciality.id)}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-12">
                    <Link className="btn btn-primary" to='/nueva_especialidad'>Agregar especialidad</Link>
                </div>
            </div>
        </>
    )
    }
}

const mapStateToProps = state => ({
    specialities: state.specialities.specialities,
    loading: state.specialities.loading
});

const mapDispatchToProps = {
    mostrarEspecialidades,
    eliminarEspecialidad
}

export default connect(mapStateToProps, mapDispatchToProps)(ATableSpecialities);