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
        default:
            return state;
    }
}