import { AGREGAR_CITA, MOSTRAR_CITAS, ERROR_CITAS, LOADING_CITAS } from '../actions/types';

const initialState = {
    loading: false,
    citas: [],
    error: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_CITAS: return {
            loading: false,
            citas: action.payload,
            error: false
        }
        case LOADING_CITAS: return {
            ...state,
            loading: true
        }
        case ERROR_CITAS: return {
            loading: false,
            citas: [],
            error: true
        }
        default:
            return state;
    }
}