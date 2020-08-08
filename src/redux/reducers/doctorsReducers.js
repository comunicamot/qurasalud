import { AGREGAR_DOCTOR, MOSTRAR_DOCTORES, MOSTRAR_DOCTOR, ERROR, LOADING, EDITAR_DOCTOR } from '../actions/types';

const initialState = {
    loading: false,
    doctors: [],
    error: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case MOSTRAR_DOCTORES:
            return {
                loading: false,
                doctors: action.payload,
                error: false
            }
        case AGREGAR_DOCTOR:
            return {
                loading: false,
                
            }
        case ERROR:
            return {
                loading: false,
                doctors: [],
                error: true
            }
        default:
            return state;
    }
}
