
import React, { Component } from 'react';
import "rxjs";
import { Provider } from 'react-redux'
import store from './src/store'
import AppWithNavigationState from './src/Router'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDqQ2VckbVvxq8T6M1Ma01ULi2UtjohvQ4",
  authDomain: "goldcoach-9b73b.firebaseapp.com",
  databaseURL: "https://goldcoach-9b73b.firebaseio.com",
  projectId: "goldcoach-9b73b",
  storageBucket: "goldcoach-9b73b.appspot.com",
  messagingSenderId: "784185545904"
};
export default class App extends Component {
  componentWillMount() {
    console.log(firebase.apps.length)
    if (firebase.apps.length===1) {
      
    } else {
      firebase.initializeApp(config);
    }

  }
  render() {

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
