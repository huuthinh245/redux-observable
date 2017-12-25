import { NavigationActions } from 'react-navigation'
import { combineReducers } from 'redux';
import { AppNavigator } from '../Router'
import firebase from 'firebase'

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'))


export const nav = (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
        case "Login":
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Home' }),
                state
            )
            break;
        case "Logout":
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            )
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state)
            break;
    }
    //if nextState undefined return state 
    return nextState || state
}

