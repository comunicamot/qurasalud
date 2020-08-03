import { combineReducers } from 'redux'
import loginReducers from './user/loginReducers' 

export default combineReducers({
    login: loginReducers
});