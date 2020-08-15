import { AGREGAR_PACIENTE, MOSTRAR_PACIENTE, EDITAR_PACIENTE, ELIMINAR_PACIENTE, MOSTRAR_PACIENTES, LOADING_PATIENTS, ERROR_PATIENTS }
    from '../actions/types';

import axios from 'axios'

export const mostrarPacientes = () => async dispatch => {
    try {

        dispatch({
            type: LOADING_PATIENTS
        });

        const token = localStorage.getItem('TOKEN');

        setTimeout(async function () {
            const response = await axios.get('http://74.207.230.214/api/v1/patients', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);

            dispatch({
                type: MOSTRAR_PACIENTES,
                payload: response.data
            });
        }, 1000);

    } catch (e) {
        console.log(e);

        dispatch({
            type: ERROR_PATIENTS
        });

    }
}

export const agregarPaciente = patientModel => async dispatch => {
    try {
        dispatch({
            type: LOADING_PATIENTS
        });
        const token = localStorage.getItem('TOKEN');
        const response = await axios.post('http://74.207.230.214/api/v1/register', patientModel, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);

        if (response.data.codRes === "00") {
            dispatch({
                type: AGREGAR_PACIENTE
            });
        } else {
            dispatch({
                type: ERROR_PATIENTS
            });
        }

    } catch (e) {
        console.log(e);

        dispatch({
            type: ERROR_PATIENTS
        })
    }
}

export const mostrarPaciente = patientId => async dispatch => {
    try {
        dispatch({
            type: LOADING_PATIENTS
        });
        const token = localStorage.getItem('TOKEN');
        const response = await axios.get(`http://74.207.230.214/api/v1/patients/${patientId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);

        dispatch({
            type: MOSTRAR_PACIENTE,
            payload: response.data
        });

    } catch (e) {
        console.log(e);

        dispatch({
            type: ERROR_PATIENTS
        })
    }
}

export const editarPaciente = patientModel => async dispatch => {
    try {
        dispatch({
            type: LOADING_PATIENTS
        });

        const {id} = patientModel;

        const token = localStorage.getItem('TOKEN');
        const response = await axios.put(`http://74.207.230.214/api/v1/patients/${id}`, patientModel, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);

        if(response.data.codRes === "00"){
            dispatch({
                type: EDITAR_PACIENTE,
                payload: true
            });
        }else{
            dispatch({
                type: ERROR_PATIENTS
            });
        }

    } catch (e) {
        console.log(e);

        dispatch({
            type: ERROR_PATIENTS
        });
    }
}

export const eliminarPaciente = patientId => async dispatch => {
    try {
        dispatch({
            type: LOADING_PATIENTS
        });

        const token = localStorage.getItem('TOKEN');
        const response = await axios.delete(`http://74.207.230.214/api/v1/patients/${patientId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);

        if(response.data.codRes === "00"){
            dispatch({
                type: ELIMINAR_PACIENTE,
                payload: true
            });
        }else{
            dispatch({
                type: ERROR_PATIENTS
            });
        }

    } catch (e) {
        console.log(e);

        dispatch({
            type: ERROR_PATIENTS
        });
    }
}
