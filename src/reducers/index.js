import { combineReducers } from 'redux'

import players from './players'
import quests from './quests'
import session from './session'
import game from './game'

const rootReducer = combineReducers({
    players,
    quests,
    session,
    game
})

export default rootReducer