import { USER_REQUEST, USER_FAILURE, USER_SUCCESS } from '../types';

import axios from 'axios';

export const userLogin = user => async dispatch => {
    try {

        dispatch({
            type: USER_REQUEST
        });
        
        const response = await axios.post('http://74.207.230.214/api/v1/login', user);

        dispatch({
            type: USER_SUCCESS,
            payload: response.data
        });
            
    } catch (e) {

        dispatch({
            type: USER_FAILURE,
            payload: 'Las credenciales son incorrectas.'
        });
        
    }
}
