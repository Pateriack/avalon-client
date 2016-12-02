import * as ActionTypes from '../constants/ActionTypes'

export const socketConnected = () => {
    return {
        type: ActionTypes.SOCKET_CONNECTED
    }
}

export const socketDisconnected = () => {
    return {
        type: ActionTypes.SOCKET_DISCONNECTED
    }
}