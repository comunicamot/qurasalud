import { AGREGAR_DOCTORTURN } from '../actions/types';
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

    } catch (e) {
        
        console.log(e);

    }

}