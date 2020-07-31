import { USER_LOGIN, USER_LOGOUT } from '../actions/types';

import axios from 'axios';

export const userLogin = user => async dispatch => {
    const response = await axios.post('http://localhost:5000/login', user);
    console.log(response.data);
    dispatch({
         type: USER_LOGIN,
         payload: response.data
    });
}

export const userLogout = user => async dispatch => {
    const response = await axios.post('http://localhost:5000/login', user);
    dispatch({
        type: USER_LOGOUT,
        payload: response.data
   });

}