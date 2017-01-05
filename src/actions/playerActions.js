import * as ActionTypes from '../constants/ActionTypes'

export const updatePlayers = players => {
    return (dispatch, getState) => {
        const clientId = getState().session.get('clientId')
        players = players.map(player => Object.assign(player, {me: player.id === clientId}))
        dispatch({
            type: ActionTypes.UPDATE_PLAYERS,
            players
        })
    }
}

export const setName = name => {
    return {
        type: ActionTypes.SET_NAME_REQUEST,
        meta: {
            socket: true
        },
        payload: {
            name
        }
    }
}

export const setNameFailure = error => {
    console.log(error)
    return {
        type: ActionTypes.SET_NAME_FAILURE,
        error
    }
}

export const setNameSuccess = name => {
    return {
        type: ActionTypes.SET_NAME_SUCCESS,
        name
    }
}

export const setInfo = info => {

    return {
        type: ActionTypes.GIVE_PLAYER_INFO,
        info: {
            ...info,

        }
    }
}

export const selectPartyMemberRequest = playerId => {
    console.log(`select ${playerId}`)
    return {
        type: ActionTypes.SELECT_PARTY_MEMBER_REQUEST,
        meta: {
            socket: true
        },
        payload: {
            playerId
        }
    }
}

export const removePartyMemberRequest = playerId => {
    return {
        type: ActionTypes.REMOVE_PARTY_MEMBER_REQUEST,
        meta: {
            socket: true
        },
        payload: {
            playerId
        }
    }
}

export const togglePartyMember = playerId => {
    return (dispatch, getState) => {
        const player = getState().players.find(p => p.get('id') === playerId)
        if(player.get('party'))
            dispatch(removePartyMemberRequest(playerId))
        else
            dispatch(selectPartyMemberRequest(playerId))
    }
}