import {
    AGREGAR_TURNO,
    MOSTRAR_TURNOS,
    MOSTRAR_TURNO,
    EDITAR_TURNO,
    ELIMINAR_TURNO,
    LOADING_TURNOS,
    ERROR_TURNOS
} from "../actions/types";

import axios from 'axios';

export const mostrarTurnos = () => async dispatch => {
    try {

        dispatch({
            type: LOADING_TURNOS
        });

        const token = localStorage.getItem('TOKEN');
        const response = await axios.get('http://74.207.230.214/api/v1/turns', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(" REQUEST TO TURNS ");
        console.log(response.data);

        dispatch({
            type: MOSTRAR_TURNOS,
            payload: response.data
        });

    } catch (e) {
        console.log(e);
        dispatch({
            type: ERROR_TURNOS
        });

    }
}

export const agregarTurno = turnModel => async dispatch => {
    try {

        dispatch({
            type: LOADING_TURNOS
        });

        const token = localStorage.getItem('TOKEN');

        setTimeout(async function () {
            const response = await axios.post('http://74.207.230.214/api/v1/turns', turnModel, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log(response.data);

            if (response.data.codRes === "00") {

                dispatch({
                    type: AGREGAR_TURNO
                })

            } else {
                dispatch({
                    type: ERROR_TURNOS
                });

            }
        }, 1000);

    } catch (e) {
        console.log(e);
        dispatch({
            type: ERROR_TURNOS
        });

    }
}

export const eliminarTurno = turnId => async dispatch => {
    try {
        
        const token = localStorage.getItem('TOKEN');
        const response = await axios.delete(`http://74.207.230.214/api/v1/turns/${turnId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);

        if(response.data.codRes === "00") {

            dispatch({
                type: ELIMINAR_TURNO
            });

        } else {
            
            dispatch({
                type: ERROR_TURNOS
            });
            
        }


    } catch (e) {
        console.log(e);
        dispatch({
            type: ERROR_TURNOS
        });

    }
}