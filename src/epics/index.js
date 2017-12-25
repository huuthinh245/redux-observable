import { combineEpics } from 'redux-observable'
import pingEpics from './pingEpics';
import mapEpic from './userEpics'
import { loginUser,logoutUser } from './AuthEpics'
export default combineEpics(
    pingEpics,
    mapEpic,
    loginUser,
    logoutUser
)