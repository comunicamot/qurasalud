import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from '../types';

import axios from 'axios'

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
        console.log(e);

        dispatch({
            type: USER_FAILURE,
            payload: true
        });

    }

}

export const userSignUp = user => async dispatch => {
    try {
        dispatch({
            type: USER_REQUEST
        });
    
        const response = await axios.post('http://74.207.230.214/api/v1/register', user);

        if(response.data.codRes == "00") {
            dispatch({
                type: USER_SUCCESS,
                payload: user
            });
        }

        if(response.data.codRes == "01") {
            dispatch({
                type: USER_FAILURE,
                payload: true
            });    
        }
        
    } catch (e) {
        
        dispatch({
            type: USER_FAILURE,
            payload: true
        });

    }

}