import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import login from './screens/login'
import register from './screens/register'
import React, { Component } from 'react'
import {connect} from 'react-redux'
const stackLogin = {
    LoginForm: { screen: login },
    Register: { screen: register }
}
const stackLoginConfig = {
    navigationOption: {
        header: null
    },
    initialRouteName: 'Login'
}
export const LoginNavigator = StackNavigator(stackLogin, stackLoginConfig)


class UnAuthNavigator extends Component {
    render() {
        return (
            <LoginNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.unAuthNav
                })}
            />
        )
    }
}
const mapStateToProps = state => {
    return { unAuthNav: state.unAuthNav }

}
export default connect(mapStateToProps)(UnAuthNavigator);