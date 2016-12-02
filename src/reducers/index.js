import { combineReducers } from 'redux'

import players from './players'
import quests from './quests'
import session from './session'

const rootReducer = combineReducers({
    players,
    quests,
    session
})

export default rootReducer