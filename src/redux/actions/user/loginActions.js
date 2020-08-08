import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, USER_SIGNUP } from '../types';

import axios from 'axios'

export const userLogin = userModel => async dispatch => {
    try {

        dispatch({
            type: USER_REQUEST
        });

        const response = await axios.post('http://74.207.230.214/api/v1/login', userModel);
        
        dispatch({
            type: USER_SUCCESS,
            payload: response.data
        });

    } catch (e) {
        console.log(e);

        dispatch({
            type: USER_FAILURE,
            payload: true
        });

    }

}

export const userSignUp = userModel => async dispatch => {
    try {
        dispatch({
            type: USER_REQUEST
        });
        
        await axios.post('http://74.207.230.214/api/v1/register', userModel);
        
        dispatch({
            type: USER_SIGNUP,
            payload: true
        });
        
    } catch (e) {
        
        dispatch({
            type: USER_FAILURE,
            payload: true
        });

    }

}