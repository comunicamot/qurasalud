import { AGREGAR_DOCTOR, MOSTRAR_DOCTORES, MOSTRAR_DOCTOR, ERROR, LOADING, EDITAR_DOCTOR, ELIMINAR_DOCTOR } from '../actions/types';

const initialState = {
    loading: false,
    doctors: [],
    error: false,
    doctor_details: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                loading: true,
                doctors: [],
                error: false,
                doctor_details: []
            }
        case MOSTRAR_DOCTORES:
            return {
                loading: false,
                doctors: action.payload,
                error: false,
                doctor_details: []
            }
        case AGREGAR_DOCTOR: return {
            loading: false,
            doctors: [],
            error: false,
            doctor_details: []
        }
        case ERROR:
            return {
                loading: false,
                doctors: [],
                error: true,
                doctor_details: []
            }
        case MOSTRAR_DOCTOR: return {
            ...state,
            loading: false,
            error: false,
            doctor_details: action.payload
        }
        case EDITAR_DOCTOR: return {
            loading: false,
            doctors: [],
            error: false,
            doctor_details: []
        }
        case ELIMINAR_DOCTOR: return {
            loading: false,
            doctors: [],
            error: false,
            doctor_details: []
        }
        default:
            return state;
    }
}
