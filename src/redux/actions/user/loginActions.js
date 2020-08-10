import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGOUT } from '../types';
import axios from 'axios'

export const userLogin = userModel => async dispatch => {
    try {

        dispatch({
            type: SIGNIN_REQUEST
        });

        const response = await axios.post('http://74.207.230.214/api/v1/login', userModel);
        
        dispatch({
            type: SIGNIN_SUCCESS,
            payload: response.data
        });

    } catch (e) {
        console.log(e);

        dispatch({
            type: SIGNIN_ERROR
        });

    }

}

export const userSignUp = userModel => async dispatch => {
    try {
        dispatch({
            type: SIGNUP_REQUEST
        });
        
        await axios.post('http://74.207.230.214/api/v1/register', userModel);
        
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: userModel.email
        });
        
    } catch (e) {
        
        dispatch({
            type: SIGNUP_ERROR
        });

    }

}

export const userLogout = () => async dispatch => {
    
    dispatch({
        type: LOGOUT
    })

}