import { combineReducers } from 'redux'
import loginReducers from './user/loginReducers'
import doctorsReducers from './doctorsReducers';
import specialitiesReducers from './specialitiesReducers';
import patientsReducers from './patientsReducers';

export default combineReducers({
    login: loginReducers,
    doctors: doctorsReducers,
    specialities: specialitiesReducers,
    patients: patientsReducers
});