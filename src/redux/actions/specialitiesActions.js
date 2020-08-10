import { AGREGAR_ESPECIALIDAD, MOSTRAR_ESPECIALIDADES, EDITAR_ESPECIALIDAD, ELIMINAR_ESPECIALIDAD, LOADING, ERROR } from '../actions/types';

export const mostrarEspecialidades = () => async dispatch => {
    try {
        
        dispatch({
            action: LOADING
        })

        const token = localStorage.getItem('TOKEN');
        const response = await axios.get('http://74.207.230.214/api/v1/specialties', {headers: {
            Authorization: `Bearer ${token}`
        }});

        dispatch({
            type: MOSTRAR_ESPECIALIDADES,
            payload: response.data
        });

    } catch (e) {

        dispatch({
            type: ERROR
        })

    }
}
