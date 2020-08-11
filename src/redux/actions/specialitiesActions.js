import { AGREGAR_ESPECIALIDAD, MOSTRAR_ESPECIALIDADES, EDITAR_ESPECIALIDAD, ELIMINAR_ESPECIALIDAD, LOADING, ERROR, MOSTRAR_ESPECIALIDAD } from '../actions/types';
import axios from 'axios';

export const mostrarEspecialidades = () => async dispatch => {
    try {
        
        dispatch({
            type: LOADING
        })

        const token = localStorage.getItem('TOKEN');
        const response = await axios.get('http://74.207.230.214/api/v1/specialties', {headers: {
            Authorization: `Bearer ${token}`
        }});

        dispatch({
            type: MOSTRAR_ESPECIALIDADES,
            payload: response.data
        });

    } catch (e) {

        console.log(e);

        dispatch({
            type: ERROR
        })

    }
}

export const agregarEspecialidad = specialityModel => async dispatch => {

    try {
        dispatch({
            type: LOADING
        });

        const token = localStorage.getItem('TOKEN');
        const response = await axios.post('http://74.207.230.214/api/v1/specialties', specialityModel, {headers: {
            Authorization: `Bearer ${token}`
        }});

        console.log(response.data);
        
        dispatch({
            type: AGREGAR_ESPECIALIDAD
        });

    } catch (e) {
        console.log(e);

        dispatch({
            type: ERROR
        })
    }
}

export const mostrarEspecialidad = specialityId => async dispatch => {

    try {
        dispatch({
            type: LOADING
        });

        const token = localStorage.getItem('TOKEN');
        const response = await axios.get(`http://74.207.230.214/api/v1/specialties/${specialityId}`, {headers: {
            Authorization: `Bearer ${token}`
        }});

        console.log(response.data);
        
        dispatch({
            type: MOSTRAR_ESPECIALIDAD,
            payload: response.data
        });

    } catch (e) {
        console.log(e);

        dispatch({
            type: ERROR
        })
    }
}

export const editarEspecialidad = specialityModel => async dispatch => {

    try {
        dispatch({
            type: LOADING
        });

        console.log(specialityModel);

        const {id} = specialityModel;
        const token = localStorage.getItem('TOKEN');
        const response = await axios.put(`http://74.207.230.214/api/v1/specialties/${id}`, specialityModel, {headers: {
            Authorization: `Bearer ${token}`
        }});

        console.log(response.data);
        
        dispatch({
            type: EDITAR_ESPECIALIDAD
        });

    } catch (e) {
        console.log(e);

        dispatch({
            type: ERROR
        })
    }
}


export const eliminarEspecialidad = specialityId => async dispatch => {

    try {
        dispatch({
            type: LOADING
        });

        const token = localStorage.getItem('TOKEN');
        const response = await axios.delete(`http://74.207.230.214/api/v1/specialties/${specialityId}`, {headers: {
            Authorization: `Bearer ${token}`
        }});

        console.log(response.data);
        
        dispatch({
            type: ELIMINAR_ESPECIALIDAD
        });

    } catch (e) {
        console.log(e);

        dispatch({
            type: ERROR
        })
    }
}
