import * as ActionTypes from '../constants/ActionTypes'

const INITIAL_STATE = {
    connected: false
}

const sessionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.SOCKET_CONNECTED:
            return {...state, connected: true}
        case ActionTypes.SOCKET_DISCONNECTED:
            return {...state, connected: false}
        default:
            return state
    }
}

export default sessionReducer