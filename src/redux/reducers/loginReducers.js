import { USER_LOGIN, USER_LOGOUT } from '../actions/types';

const initialState = {
    user: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        default:
            return state;
    }
}