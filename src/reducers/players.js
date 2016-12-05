import {List, fromJS} from 'immutable'

import * as ActionTypes from '../constants/ActionTypes'

const INITIAL_STATE = List()

const playersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.UPDATE_PLAYERS:
            return fromJS(action.players)

        default:
            return state
    }
}

export default playersReducer