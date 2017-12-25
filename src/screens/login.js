import React, { Component } from 'react';
import { ActivityIndicator, View, TextInput, } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, Button, Text } from 'native-base'
import * as ActionTypes from '../types'
import firebase from 'firebase'
class login extends Component {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
        this.state = { username: 'huuthinh2209@gmail.com', password: '123456' }
    }
    componentDidMount() {
       this.props.dispatch({type:'Login'})
    }
    _login() {
        const { username, password } = this.state
        // this.setState({ loading: true })
        // setTimeout(() => {
        //     this.props.dispatch({ type: ActionTypes.LOGIN_USER, payload: { username, password } })
        //     this.setState({ loading: false })
        // }, 5000)   
        this.props.dispatch({ type: ActionTypes.LOGIN_USER, payload: { username, password } })
        console.log(this.props.loading)
    }
    renderButton() {
        return (
            this.props.loading ?
                <Button block info style={styles.buttonStyle} >
                    <ActivityIndicator size="large" color="#00ff00" />
                </Button>
                :
                <Button block info style={styles.buttonStyle} onPress={() => this._login()}>
                    <Text>Login</Text>
                </Button>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 10, justifyContent: 'center',}}>
                <View style={{ marginBottom: 5, alignItems: 'center' }}>
                    <TextInput
                        style={{ width: 400, borderWidth: 1, borderRadius: 10 }}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={(username) => this.setState({ username })}
                        value={this.state.username}
                    />
                </View>
                <View style={{ marginBottom: 5, alignItems: 'center' }}>
                    <TextInput
                        style={{ width: 400, borderWidth: 1, borderRadius: 10 ,}}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                </View>
                <Text style={{ color: 'red', textAlign: 'center' }}>{this.props.message}</Text>
                <Text style={{ color: 'red', textAlign: 'center' }}>{this.props.email}</Text>
                {this.renderButton()}
            </View>
        )
    }
}
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        alignSelf: 'stretch',
        // backgroundColor: 'rgb(199, 216, 249)',
        // borderRadius: 5,
        // borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    },
}
const mapStateToProps = (state) => {
    return {
        message: state.AuthRuducer.message,
        email: state.AuthRuducer.email,
        isLogged: state.AuthRuducer.isLoggedIn,
        loading: state.AuthRuducer.loading
    }
}

export default connect(mapStateToProps)(login)