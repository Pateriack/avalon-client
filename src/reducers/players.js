// import * as actionTypes from '../constants/actionTypes'

const INITIAL_STATE = [
    {
        number: 1,
        name: 'Player 1'
    },
    {
        number: 2,
        name: 'Player 2'
    },
    {
        number: 3,
        name: 'Player 3'
    }
]

const playersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default playersReducer