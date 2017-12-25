import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducers from './reducers';
import rootEpics from './epics';

const epicMiddleware = createEpicMiddleware(rootEpics);


const store = createStore(rootReducers, {}, compose(applyMiddleware(epicMiddleware)));

export default store