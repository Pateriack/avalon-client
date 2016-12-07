import * as ActionTypes from '../constants/ActionTypes'

export const updatePlayers = players => {
    return {
        type: ActionTypes.UPDATE_PLAYERS,
        players
    }
}

export const setName = name => {
    return {
        type: ActionTypes.SET_NAME_REQUEST,
        meta: {
            socket: true
        },
        payload: {
            name
        }
    }
}

export const setNameFailure = error => {
    console.log(error)
    return {
        type: ActionTypes.SET_NAME_FAILURE,
        error
    }
}

export const setNameSuccess = name => {
    return {
        type: ActionTypes.SET_NAME_SUCCESS,
        name
    }
}

export const setInfo = info => {

    return {
        type: ActionTypes.GIVE_PLAYER_INFO,
        info: {
            ...info,

        }
    }
}