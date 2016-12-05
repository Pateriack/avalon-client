import {List, fromJS} from 'immutable'

import * as ActionTypes from '../constants/ActionTypes'
// import * as questStatus from '../constants/QuestStatus'

const INITIAL_STATE = List()

const questsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.UPDATE_QUESTS:
            return fromJS(action.quests)

        default:
            return state
    }
}

export default questsReducer