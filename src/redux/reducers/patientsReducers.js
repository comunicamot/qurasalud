import {
AGREGAR_PACIENTE,
MOSTRAR_PACIENTES,
EDITAR_PACIENTE,
ELIMINAR_PACIENTE,
MOSTRAR_PACIENTE,
LOADING_PATIENTS,
ERROR_PATIENTS}
from '../actions/types';

const nullState = {
    loading: false,
    patients: [],
    error: false,
    edited: false,
    deleted: false,
    patient_details: []
}

export default function (state = nullState, action) {
    switch (action.type) {
        case LOADING_PATIENTS: return {
            ...state,
            loading: true
        }
        case MOSTRAR_PACIENTES: return {
            loading: false,
            patients: action.payload,
            error: false,
            edited: false,
            deleted: false,
            patient_details: []
        }
        case AGREGAR_PACIENTE: return {
            loading: false,
            patients: [],
            error: false,
            edited: false,
            deleted: false,
            patient_details: []
        }
        case MOSTRAR_PACIENTE: return {
            loading: false,
            patients: [],
            error: false,
            edited: false,
            deleted: false,
            patient_details: action.payload
        }
        case EDITAR_PACIENTE: return {
            loading: false,
            patients: [],
            error: false,
            edited: true,
            deleted: false,
            patient_details: []
        }
        case ELIMINAR_PACIENTE: return {
            loading: false,
            patients: [],
            error: false,
            edited: false,
            deleted: true,
            patient_details: []
        }
        case ERROR_PATIENTS: return {
            loading: false,
            patients: [],
            error: true,
            edited: false,
            deleted: false,
            patient_details: []
        }
        default:
            return state
    }
}