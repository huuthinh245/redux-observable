import * as ActionTypes from '../types'


export default (state = { data: '', error: '', fetching: false, arr: [] }, action) => {
      switch (action.type) {
            case ActionTypes.FETCH_USER:
                  return { ...state, fetching: true, error: '' }
            case ActionTypes.FETCH_SUCCESS:
                  console.log(action.payload)
                  return { ...state, data: action.payload.data, fetching: false }
            case ActionTypes.FETCH_CANCEL:
                  console.log('cancel')
                  return { ...state, data: '', error: '', fetching: false }
            case ActionTypes.FETCH_ERROR:
                  console.log('fail')
                  return { ...state, data: '', error: 'fail', fetching: false }
            case ActionTypes.ADD_SUCCESS:
                  console.log('add success', action.payload)
                  return { ...state, arr: state.arr.concat(action.payload.data), data: '', error: '', fetching: false }
            case ActionTypes.DELETE_SUCCESS:
                  console.log('delete user',action.id)
                  return {
                        ...state, 
                        arr: state.arr.filter(data => data.id !==action.id),
                        error:'',
                        fetching:false,
                        data:''
                  }
            case ActionTypes.FAILED_USER:
                  console.log('failed')
                  return state;
            default:
                  return state
      }
}