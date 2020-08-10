import { AGREGAR_DOCTOR, MOSTRAR_DOCTORES, MOSTRAR_DOCTOR, ERROR, LOADING, EDITAR_DOCTOR } from '../actions/types';

const initialState = {
    loading: false,
    doctors: [],
    error: false,
    doctor_details: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
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
        case MOSTRAR_DOCTOR: return {
            ...state,
            loading: false,
            error: false,
            doctor_details: action.payload
        }
        default:
            return state;
    }
}
