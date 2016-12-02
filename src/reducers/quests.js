import * as questStatus from '../constants/questStatus'

const INITIAL_STATE = [
    {
        number: 1,
        status: questStatus.QUEST_IN_PROGRESS,
        players: 2
    },
    {
        number: 2,
        status: questStatus.QUEST_NOT_STARTED,
        players: 2
    },
    {
        number: 3,
        status: questStatus.QUEST_NOT_STARTED,
        players: 3
    },
    {
        number: 4,
        status: questStatus.QUEST_NOT_STARTED,
        players: 3
    },
    {
        number: 5,
        status: questStatus.QUEST_NOT_STARTED,
        players: 3
    }
]

const questsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default questsReducer