import * as ActionTypes from '../constants/ActionTypes'

export const startSetup = () => {
    return {
        type: ActionTypes.START_SETUP_REQUEST,
        meta: {
            socket: true
        }
    }
}

export const startSetupFailure = (error) => {
    console.log(error)
    return {
        type: ActionTypes.START_SETUP_FAILURE,
        error
    }
}

export const submitRulesRequest = (rules) => {
    return {
        type: ActionTypes.SUBMIT_RULES_REQUEST,
        meta: {
            socket: true
        },
        payload: {...rules}
    }
}