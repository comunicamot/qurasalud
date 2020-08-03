import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from '../../actions/types';

const initialState = {
    loading: false,
    user: null,
    error: false
}

export default function (state = initialState, action) {

    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_SUCCESS:
            localStorage.setItem('QURASALUD_TOKEN', action.payload.token);
            return {
                loading: false,
                user: action.payload,
                error: false
            }
        case USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}