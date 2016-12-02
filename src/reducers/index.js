import { combineReducers } from 'redux'

import players from './players'
import quests from './quests'
import game from './game'

const rootReducer = combineReducers({
    players,
    quests,
    game
})

export default rootReducer