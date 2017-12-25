
import { Observable } from 'rxjs'
import firebase from 'firebase'
import * as ActionTypes from '../types'
import store from '../store'
const signinApi = (username, password) => Observable.fromPromise(
    firebase.auth().signInWithEmailAndPassword(username, password)
)

const signOutApi = () => Observable.fromPromise(
    firebase.auth().signOut()
)

export const loginUser = action$ => action$.ofType(ActionTypes.LOGIN_USER)
    .mergeMap(action => signinApi(action.payload.username, action.payload.password)
        .map(user => {
            store.dispatch({ type: 'Login' })
            return {
                type: ActionTypes.LOGIN_USER_SUCCESS,
                payload: user.email
            }
        })
        .catch((err) =>
            Observable.of({ type: ActionTypes.LOGIN_USER_FAIL, payload: err.message }))
    )

export const logoutUser = action$ => action$.ofType(ActionTypes.LOGOUT_USER)
    .mergeMap(() => signOutApi())
    .map(() => {
        store.dispatch({ type: 'Logout' })
        return {
            type: ActionTypes.LOGUT_USER_SUCCESS
        }
    })
