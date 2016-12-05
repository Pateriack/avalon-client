import {createStore, applyMiddleware, compose} from 'redux'

import rootReducer from '../reducers'
import socketMiddleware from '../socket/socketMiddleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const createAvalonStore = (socket) => {
    return createStore(rootReducer, composeEnhancers(
        applyMiddleware(socketMiddleware(socket))
    ))
}