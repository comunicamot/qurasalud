import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_ERROR, LOGOUT, UPDATE_INFO, UPDATE_AVATAR, LOADING, ERROR } from '../../actions/types';

const initialState = {
    loading_signup: false,
    loading_signin: false,
    user: null,
    error_signup: false,
    error_signin: false,
    email_verification: null,
    update_info: false,
    update_avatar: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNUP_REQUEST: return {
            ...state,
            loading_signup: true
        }
        case SIGNUP_SUCCESS: return {
            ...state,
            loading_signup: false,
            email_verification: action.payload,
            update_info: false,
            update_avatar: false
        }
        case SIGNUP_ERROR: return {
            ...state,
            loading_signup: false,
            email_verification: null,
            error_signup: true,
            update_info: false,
            update_avatar: false
        }
        case SIGNIN_REQUEST: return {
            loading_signup: false,
            loading_signin: true,
            user: null,
            error_signup: false,
            error_signin: false,
            email_verification: null,
            update_info: false,
            update_avatar: false
        }
        case SIGNIN_SUCCESS: return {
            loading_signup: false,
            loading_signin: false,
            user: action.payload,
            error_signup: false,
            error_signin: false,
            email_verification: null,
            update_info: false,
            update_avatar: false
        }
        case SIGNIN_ERROR: return {
            loading_signup: false,
            loading_signin: false,
            user: null,
            error_signup: false,
            error_signin: true,
            email_verification: null,
            update_info: false,
            update_avatar: false
        }
        case UPDATE_INFO: return {
            loading_signup: false,
            loading_signin: false,
            user: null,
            error_signup: false,
            error_signin: false,
            email_verification: null,
            update_info: true,
            update_avatar: false
        }
        case UPDATE_AVATAR: return {
            loading_signup: false,
            loading_signin: false,
            user: null,
            error_signup: false,
            error_signin: false,
            email_verification: null,
            update_info: false,
            update_avatar: true
        }
        case LOGOUT: return {
            loading_signup: false,
            loading_signin: false,
            user: null,
            error_signup: false,
            error_signin: false,
            email_verification: null,
            update_info: false,
            update_avatar: false
        }
        default:
            return state;
    }
}