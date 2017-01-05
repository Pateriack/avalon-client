import {socketConnected, socketDisconnected} from '../actions/connectionActions'
import {hostGameSuccess, joinGameSuccess, joinGameFailure, startSetupSuccess, startPartySelection} from '../actions/gameActions'
import {updatePlayers, setNameFailure, setNameSuccess, setInfo} from '../actions/playerActions'
import {startSetupFailure} from '../actions/hostActions'
import {updateQuests} from '../actions/questActions'
import * as ActionTypes from '../constants/ActionTypes'

export default class SocketHandler {
    constructor(socket, store) {
        //bind handlers to socket
        socket.on('connect', () => store.dispatch(socketConnected()))
        socket.on('disconnect', () => store.dispatch(socketDisconnected()))
        socket.on(ActionTypes.HOST_GAME_SUCCESS, payload => store.dispatch(hostGameSuccess(payload.gameId)))
        socket.on(ActionTypes.JOIN_GAME_FAILURE, payload => store.dispatch(joinGameFailure(payload.error)))
        socket.on(ActionTypes.JOIN_GAME_SUCCESS, payload => store.dispatch(joinGameSuccess(payload.clientId, payload.gameId, payload.playerNumber, payload.name)))
        socket.on(ActionTypes.UPDATE_PLAYERS, payload => store.dispatch(updatePlayers(payload.players)))
        socket.on(ActionTypes.START_SETUP_FAILURE, payload => store.dispatch(startSetupFailure(payload.error)))
        socket.on(ActionTypes.START_SETUP_SUCCESS, () => store.dispatch(startSetupSuccess()))
        socket.on(ActionTypes.SET_NAME_FAILURE, payload => store.dispatch(setNameFailure(payload.error)))
        socket.on(ActionTypes.SET_NAME_SUCCESS, payload => store.dispatch(setNameSuccess(payload.name)))
        socket.on(ActionTypes.UPDATE_QUESTS, payload => store.dispatch(updateQuests(payload.quests)))
        socket.on(ActionTypes.GIVE_PLAYER_INFO, payload => store.dispatch(setInfo(payload)))
        socket.on(ActionTypes.START_PARTY_SELECTION, () => store.dispatch(startPartySelection()))
        socket.on(ActionTypes.SELECT_PARTY_MEMBER_FAILURE, payload => console.warn(payload.error))
        socket.on(ActionTypes.REMOVE_PARTY_MEMBER_FAILURE, payload => console.warn(payload.error))
    }
}