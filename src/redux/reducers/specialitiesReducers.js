import { AGREGAR_ESPECIALIDAD, MOSTRAR_ESPECIALIDADES, EDITAR_ESPECIALIDAD, ELIMINAR_ESPECIALIDAD, ERROR, LOADING } from '../actions/types';

const initialState = {
    loading: false,
    specialities: [],
    error: false
}

export default function (state = initialState, action){
    switch (action.type) {
        case LOADING: return {
            ...state,
            loading: true
        }
        case MOSTRAR_ESPECIALIDADES: return {
            loading: false,
            specialities: action.payload,
            error: false
        }
        case ERROR: return {
            loading: false,
            specialities: [],
            error: true
        }
        default: 
            return state
    }
}
