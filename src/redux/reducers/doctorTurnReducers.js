import { AGREGAR_DOCTORTURN, MOSTRAR_DOCTORTURNS, LOADING_DOCTORTURN, ERROR_DOCTORTURN } from '../actions/types';

const initialState = {
    loading: false,
    doctor_turns: [],
    error: false,
    added: false
}

export default function (state = initialState, action) {
    switch (action.type){
        case AGREGAR_DOCTORTURN: return {
            loading: false,
            doctor_turns: [],
            error: false,
            added: true
        }
        case MOSTRAR_DOCTORTURNS: return {
            loading: false,
            doctor_turns: action.payload,
            error: false,
            added: false
        }
        case LOADING_DOCTORTURN: return {
            ...state,
            loading: true
        }
        case ERROR_DOCTORTURN: return {
            loading: false,
            doctor_turns: [],
            error: true,
            added: false
        }
        default: 
            return state;
    }
}