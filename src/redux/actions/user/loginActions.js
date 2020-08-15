import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGOUT, UPDATE_INFO, UPDATE_AVATAR } from '../types';
import axios from 'axios'

export const userLogin = userModel => async dispatch => {
    try {

        dispatch({
            type: SIGNIN_REQUEST
        });

        const response = await axios.post('http://74.207.230.214/api/v1/login', userModel);

        if (response.data.user) {

            dispatch({
                type: SIGNIN_SUCCESS,
                payload: response.data
            });


        } else {

            dispatch({
                type: SIGNIN_ERROR
            });

        }


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
    });

}

export const adminUpdateInfo = userModel => async dispatch => {
    try {

        console.log(userModel);
        const token = localStorage.getItem('TOKEN');
        const response = await axios.put('http://74.207.230.214/api/v1/reset', userModel, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response.data);

        dispatch({
            type: UPDATE_INFO
        });

    } catch (e) {
        console.log(e);
    }

}

export const downladAvatar = () => async dispatch => {
    try {

        const token = localStorage.getItem('TOKEN');
        const response = await axios.get('http://74.207.230.214/api/v1/image/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response.data);
        if(response.data.codRes === "00") {
            localStorage.setItem('AVATAR', response.data.ruta);

        }else{
            console.log(response.data);
        }

    } catch (e) {
        console.log(e);
        
    }
}

export const uploadAvatar = formData => async dispatch => {
    try {
        
        const token = localStorage.getItem('TOKEN');
        const response = await axios.post('http://74.207.230.214/api/v1/image', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response.data);

        if(response.data.codRes === "00"){

            dispatch({
                type: UPDATE_AVATAR
            });

        } else {
        
            console.log(response.data);

        }
        
    } catch (e) {
        console.log(e);
        
    }
}