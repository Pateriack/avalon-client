import * as ActionTypes from '../constants/ActionTypes'
import * as QuestStatus from '../constants/QuestStatus'

export const updateQuests = quests => {
    return (dispatch, getState) => {
        let activeQuest
        for(let quest of quests)
            if(quest.status === QuestStatus.QUEST_IN_PROGRESS)
                activeQuest = quest.number
        dispatch({
            type: ActionTypes.UPDATE_QUESTS,
            quests,
            activeQuest
        })
    }
}