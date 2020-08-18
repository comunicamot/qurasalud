import { AGREGAR_CITA, MOSTRAR_CITAS, LOADING_CITAS, ERROR_CITAS } from './types';
import axios from 'axios';

export const mostrarCitas = () => async dispatch => {
    try {
        
        dispatch({
            type: LOADING_CITAS
        });

        const token = localStorage.getItem('TOKEN');

        setTimeout(async function () {
            const response = await axios.get('', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            dispatch({
                type: MOSTRAR_CITAS,
                payload: response.data
            });
        }, 1000);


    } catch (e) {

        console.log(e);
        dispatch({
            type: ERROR_CITAS
        });
        
    }
}