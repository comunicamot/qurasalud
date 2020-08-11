import { AGREGAR_ESPECIALIDAD, MOSTRAR_ESPECIALIDADES, EDITAR_ESPECIALIDAD, ELIMINAR_ESPECIALIDAD, ERROR, LOADING, MOSTRAR_ESPECIALIDAD } from '../actions/types';

const initialState = {
    loading: false,
    specialities: [],
    error: false,
    speciality_details: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING: return {
            ...state,
            loading: true
        }
        case MOSTRAR_ESPECIALIDADES: return {
            loading: false,
            specialities: action.payload,
            error: false,
            speciality_details: []
        }
        case ERROR: return {
            loading: false,
            specialities: [],
            error: true,
            speciality_details: []
        }
        case AGREGAR_ESPECIALIDAD: return {
            loading: false,
            specialities: [],
            error: false,
            speciality_details: []
        }
        case MOSTRAR_ESPECIALIDAD: return {
            loading: false,
            specialities: [],
            error: false,
            speciality_details: action.payload
        }
        case EDITAR_ESPECIALIDAD: return {
            loading: false,
            specialities: [],
            error: false,
            speciality_details: []
        }
        case ELIMINAR_ESPECIALIDAD: return {
            loading: false,
            specialities: [],
            error: false,
            speciality_details: []
        }
        default:
            return state
    }
}
