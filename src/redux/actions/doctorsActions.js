import { AGREGAR_DOCTOR, MOSTRAR_DOCTORES, MOSTRAR_DOCTOR, EDITAR_DOCTOR, ELIMINAR_DOCTOR, LOADING, ERROR } from './types';
import axios from 'axios'

export const mostrarDoctores = () => async dispatch => {
    try {

        dispatch({
            type: LOADING
        });

        const token = localStorage.getItem('TOKEN');
        const response = await axios.get('http://74.207.230.214/api/v1/doctors', {headers: {
            Authorization: `Bearer ${token}`
        }});
        
        dispatch({
            type: MOSTRAR_DOCTORES,
            payload: response.data
        });

    } catch (e) {
        
        console.log(e);

        dispatch({
            type: ERROR
        });

    }
}

export const agregarDoctor = doctorModel => async dispatch => {
    try {
        
        dispatch({
            type: LOADING
        });

        const token = localStorage.getItem('TOKEN');
        const response = await axios.post('http://74.207.230.214/api/v1/doctors', doctorModel, {headers: {
            Authorization: `Bearer ${token}`
        }});

        console.log(response.data);

        if(response.data.codRes == "00"){

            dispatch({
                type: AGREGAR_DOCTOR
            });

        } else {

            dispatch({
                type: ERROR
            });

        }

    } catch (e) {
        
        console.log(e);

        dispatch({
            type: ERROR
        });

    }
}

export const mostrarDoctor = doctorId => async dispatch => {
    try{

        dispatch({
            type: LOADING
        });

        const token = localStorage.getItem('TOKEN');
        const response = await axios.get(`http://74.207.230.214/api/v1/doctors/${doctorId}`, {headers: {
            Authorization: `Bearer ${token}`
        }});
        
        dispatch({
            type: MOSTRAR_DOCTOR,
            payload: response.data
        });

    }catch(e){
        dispatch({
            type: ERROR
        });
    }
}

export const editarDoctor = doctorModel => async dispatch => {

    try {
        
        dispatch({
            type: LOADING
        });

        const {id} = doctorModel;

        const token = localStorage.getItem('TOKEN');
        const response = await axios.put(`http://74.207.230.214/api/v1/doctors/${id}`, doctorModel,{headers: {
            Authorization: `Bearer ${token}`
        }});
        
        console.log(response.data);

        dispatch({
            type: EDITAR_DOCTOR
        });

    } catch (e) {
        dispatch({
            type: ERROR
        });
    }

}

export const eliminarDoctor = doctorId => async dispatch => {

    try {
        
        dispatch({
            type: LOADING
        });

        const token = localStorage.getItem('TOKEN');
        const response = await axios.delete(`http://74.207.230.214/api/v1/doctors/${doctorId}`, {headers: {
            Authorization: `Bearer ${token}`
        }});
        
        console.log(response.data);

        dispatch({
            type: ELIMINAR_DOCTOR
        });

    } catch (e) {
        dispatch({
            type: ERROR
        });
    }

}