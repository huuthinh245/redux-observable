import pingReducer from './pingReducer';
import userReducer from './userReducer'
import { combineReducers } from 'redux';
import { nav, unAuthNav } from './navigateReducer'
import { AuthRuducer } from './authReducer'
export default combineReducers({
    pingReducer,
    userReducer,
    nav,
    AuthRuducer
})