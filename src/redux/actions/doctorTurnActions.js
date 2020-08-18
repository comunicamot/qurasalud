import { AGREGAR_DOCTORTURN, MOSTRAR_DOCTORTURNS, LOADING_DOCTORTURN, ERROR_DOCTORTURN } from '../actions/types';
import axios from 'axios';

export const agregarDoctorTurn = doctorTurnModel => async dispatch => {

    try {

        const token = localStorage.getItem('TOKEN');
        const response = await axios.post('http://74.207.230.214/api/v1/doctor_turn', doctorTurnModel, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response.data);

        if (response.data.codRes === "00") {
            dispatch({
                type: AGREGAR_DOCTORTURN
            });

        } else {
            dispatch({
                type: ERROR_DOCTORTURN
            });

        }

    } catch (e) {

        console.log(e);
        dispatch({
            type: ERROR_DOCTORTURN
        });

    }

}

export const mostrarDoctorTurns = () => async dispatch => {
    try {

        dispatch({
            type: LOADING_DOCTORTURN
        });

        const token = localStorage.getItem('TOKEN');
        const response = await axios.get('http://74.207.230.214/api/v1/doctor_turn', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response.data);

        dispatch({
            type: MOSTRAR_DOCTORTURNS,
            payload: response.data
        })

    } catch (e) {
        console.log(e);
        dispatch({
            type: ERROR_DOCTORTURN
        });

    }

}