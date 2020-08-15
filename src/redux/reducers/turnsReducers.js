import { 
AGREGAR_TURNO,
MOSTRAR_TURNOS,
MOSTRAR_TURNO,
EDITAR_TURNO,
ELIMINAR_TURNO,
LOADING_TURNOS,
ERROR_TURNOS
} from '../actions/types';

const initalState = {
    loading: false,
    turns: [],
    error: false,
    added: false,
    deleted: false
}

export default function (state = initalState, action) {
    switch (action.type) {
        case MOSTRAR_TURNOS: return {
            loading: false,
            turns: action.payload,
            error: false,
            added: false,
            deleted: false
        }
        case AGREGAR_TURNO: return {
            loading: false,
            turns: [],
            error: false,
            added: true,
            deleted: false
        }
        case ELIMINAR_TURNO: return {
            ...state,
            deleted: true
        }
        case LOADING_TURNOS: return {
            ...state,
            loading: true
        }
        case ERROR_TURNOS: return {
            loading: false,
            turns: [],
            error: true,
            added: false,
            deleted: false
        }
        default:
            return state;
    }
}