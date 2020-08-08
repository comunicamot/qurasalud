import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, USER_SIGNUP } from '../../actions/types';

const initialState = {
    loading: false,
    user: null,
    error: false,
    signup: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_SUCCESS:
            return {
                loading: false,
                error: false,
                user: action.payload
            }
        case USER_FAILURE:
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        case USER_SIGNUP:
            return {
                loading: false,
                user: null,
                error: false,
                signup: action.payload
            }
        default:
            return state;
    }
}