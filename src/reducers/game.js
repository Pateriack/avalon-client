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
            return state.set('gameState', GameState.SETTING_UP_RULES)

        case ActionTypes.UPDATE_QUESTS:
            return state.set('activeQuest', action.activeQuest)

        case ActionTypes.START_PARTY_SELECTION:
            return state.set('gameState', GameState.CHOOSING_PARTY)

        default:
            return state
    }
}

export default gameReducer