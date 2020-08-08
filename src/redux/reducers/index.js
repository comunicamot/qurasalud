import { combineReducers } from 'redux'
import loginReducers from './user/loginReducers'
import doctorsReducers from './doctorsReducers';

export default combineReducers({
    login: loginReducers,
    doctors: doctorsReducers
});