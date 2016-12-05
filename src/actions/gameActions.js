import * as ActionTypes from '../constants/ActionTypes'

export const hostGame = () => {
    return {
        type: ActionTypes.HOST_GAME_REQUEST,
        meta: {
            socket: true
        }
    }
}

export const hostGameSuccess = gameId => {
    return {
        type: ActionTypes.HOST_GAME_SUCCESS,
        gameId
    }
}

export const joinGame = gameId => {
    return {
        type: ActionTypes.JOIN_GAME_REQUEST,
        meta: {
            socket: true
        },
        payload: {
            gameId
        }
    }
}

export const joinGameSuccess = (gameId, playerNumber, name) => {
    return {
        type: ActionTypes.JOIN_GAME_SUCCESS,
        gameId,
        playerNumber,
        name
    }
}

export const joinGameFailure = (error) => {
    console.log(error)
    return {
        type: ActionTypes.JOIN_GAME_FAILURE,
        error
    }
}

export const startSetupSuccess = () => {
    return {
        type: ActionTypes.START_SETUP_SUCCESS
    }
}