import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_ERROR, LOGOUT } from '../../actions/types';

const initialState = {
    loading_signup: false,
    loading_signin: false,
    user: null,
    error_signup: false,
    error_signin: false,
    email_verification: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNUP_REQUEST: return {
            ...state,
            loading_signup: true,
        }
        case SIGNUP_SUCCESS: return {
            ...state,
            loading_signup: false,
            email_verification: action.payload
        }
        case SIGNUP_ERROR: return {
            ...state,
            loading_signup: false,
            email_verification: null,
            error_signup: true
        }
        case SIGNIN_REQUEST: return {
            loading_signup: false,
            loading_signin: true,
            user: null,
            error_signup: false,
            error_signin: false,
            email_verification: null
        }
        case SIGNIN_SUCCESS: return {
            loading_signup: false,
            loading_signin: false,
            user: action.payload,
            error_signup: false,
            error_signin: false,
            email_verification: null
        }
        case SIGNIN_ERROR: return {
            loading_signup: false,
            loading_signin: false,
            user: null,
            error_signup: false,
            error_signin: true,
            email_verification: null
        }
        case LOGOUT: return {
            loading_signup: false,
            loading_signin: false,
            user: null,
            error_signup: false,
            error_signin: false,
            email_verification: null
        }
        default:
            return state;
    }
}