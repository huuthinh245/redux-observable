import * as ActionTypes from '../types'
import { Observable } from 'rxjs'
import axios from 'axios'
import { combineEpics } from 'redux-observable'

const fetchApi = (id) => Observable.fromPromise(
    axios.get(`https://api.github.com/users/${id}`)
)
const fetchApiUser = (data) => Observable.of({
    data
})

const fakeApi = (id) => Observable.of({
    id
})


const userEpics = action$ => action$.ofType(ActionTypes.FETCH_USER)
    .mergeMap(action => fetchApi(action.payload)
        .map(data => ({ type: ActionTypes.FETCH_SUCCESS, payload: data }))
        .catch(() => Observable.of({ type: ActionTypes.FETCH_ERROR }))
        .takeUntil(action$.ofType(ActionTypes.FETCH_CANCEL))
    )
const addUser = action$ => action$.ofType(ActionTypes.ADD_USER)
    .mergeMap(action => fetchApiUser(action.payload)
        .map(response => ({ type: ActionTypes.ADD_SUCCESS, payload: response }))
    )
const deleteUser = action$ => action$.ofType(ActionTypes.DELETE_USER)
    .mergeMap(action => fakeApi(action.payload)
        .map(({ id }) => ({ type: ActionTypes.DELETE_SUCCESS, id }))
    )
export default mapEpic = combineEpics
    (
    userEpics,
    addUser,
    deleteUser
    )

