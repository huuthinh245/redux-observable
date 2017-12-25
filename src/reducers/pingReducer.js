import * as actionTypes from '../types'


const pingReducer = (state={isPing:false},action)=>{
    switch (action.type) {
        case actionTypes.PING:
            return {isPing:true}
        case actionTypes.PONG:
            return {isPing:false}
        default:
            return state;
    }
}

export default pingReducer