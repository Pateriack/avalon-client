import {Map} from 'immutable'

import * as ActionTypes from '../constants/ActionTypes'
import * as GameState from '../constants/GameState'

const INITIAL_STATE = Map({
})

const gameReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.HOST_GAME_SUCCESS:
            return state.merge({gameId: action.gameId, gameState: GameState.WAITING_FOR_PLAYERS})

        case ActionTypes.JOIN_GAME_SUCCESS:
            return state.merge({gameId: action.gameId, gameState: GameState.WAITING_FOR_PLAYERS})

        case ActionTypes.START_SETUP_SUCCESS:
            return state.merge({gameState: GameState.SETTING_UP_RULES})

        default:
            return state
    }
}

export default gameReducer