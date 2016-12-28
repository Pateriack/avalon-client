import {Map} from 'immutable'

import * as ActionTypes from '../constants/ActionTypes'

const INITIAL_STATE = Map({
    connected: false
})

const sessionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.SOCKET_CONNECTED:
            return state.set('connected', true)

        case ActionTypes.SOCKET_DISCONNECTED:
            return state.set('connected', false)

        case ActionTypes.UPDATE_PLAYERS:
            let player = {}
            for(let p of action.players)
                if(p.me)
                    player = {...p}
            return state.merge(player)

        case ActionTypes.HOST_GAME_SUCCESS:
            return state.merge({gameId: action.gameId, playerNumber: 0})

        case ActionTypes.JOIN_GAME_SUCCESS:
            return state.merge({clientId: action.clientId, gameId: action.gameId, playerNumber: action.playerNumber, name: action.name, nameSet: false})

        case ActionTypes.SET_NAME_SUCCESS:
            return state.merge({name: action.name, nameSet: true})

        case ActionTypes.GIVE_PLAYER_INFO:
            return state.merge(action.info)

        default:
            return state
    }
}

export default sessionReducer