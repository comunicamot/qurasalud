import { combineReducers } from 'redux'
import loginReducers from './user/loginReducers'
import doctorsReducers from './doctorsReducers';
import specialitiesReducers from './specialitiesReducers';
import patientsReducers from './patientsReducers';
import turnsReducers from './turnsReducers';

export default combineReducers({
    login: loginReducers,
    doctors: doctorsReducers,
    specialities: specialitiesReducers,
    turns: turnsReducers
});