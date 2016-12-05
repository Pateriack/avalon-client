import * as ActionTypes from '../constants/ActionTypes'

export const updateQuests = quests => {
    return {
        type: ActionTypes.UPDATE_QUESTS,
        quests
    }
}