import * as ActionTypes from '../types'


const initialState = {
    isLoggedIn: false, loading: false, email: '', message: ''
}
export const AuthRuducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_USER:
            console.log('login')
            return { ...state, loading: true, message: '', email: '' }
        case ActionTypes.LOGIN_USER_SUCCESS:
            console.log('success')
            return { ...state, isLoggedIn: true, email: action.payload, loading: false }
        case ActionTypes.LOGIN_USER_FAIL:
            console.log('fail')
            return { ...state, isLoggedIn: false, message: action.payload, loading: false }
        case ActionTypes.LOGUT_USER_SUCCESS:
            return {...state,email:'',message:''}
        default:
            return state
    }
}