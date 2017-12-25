import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation'
import login from './screens/login'
import detail from './screens/detail'
import Main from './Main'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import firebase from 'firebase'
import register from './screens/register'
const stackMain = {
    Main: { screen: Main },
    Detail: { screen: detail }
}
const StackMainConfig = {
    navigationOption: {
        header: null,
    }
}
const MainNavigator = StackNavigator(stackMain, StackMainConfig);

const stackLogin = {
    Login: { screen: login },
    Register: { screen: register }
}
const stackLoginConfig = {
    navigationOption: {
        header:null
    },
    initialRouteName:'Login'    
}
const LoginNavigator = StackNavigator(stackLogin, stackLoginConfig)

const stackApp = {
    Login: { screen: LoginNavigator },
    Home: { screen: MainNavigator }
}

const stackAppConfig = {
    navigationOptions: {
        header: null,

    }
}
export const AppNavigator = StackNavigator(stackApp, stackAppConfig);

class AppWithNavigationState extends Component {
    //enable back button android
    componentDidMount() {
        //BackHandler.addEventListener('hardwareBackPress',this.onBackPress)

    }
    // componentWillUnmount(){
    //     BackHandler.removeEventListener('hardwareBackPress',this.onBackPress)
    // }
    // onBackPress=()=>{
    //         const {dispatch,nav} =this.props
    //         if(nav.index===0){
    //             return false
    //         }
    //         dispatch(NavigationActions.back())
    //         return true
    // }

    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                })}
            />
        )
    }
}

const mapStateToProps = state => {
    return { nav: state.nav }
}

export default connect(mapStateToProps)(AppWithNavigationState)


