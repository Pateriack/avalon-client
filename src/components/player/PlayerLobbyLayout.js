import React from 'react'
import {connect} from 'react-redux'

import * as GameState from '../../constants/GameState'
import SetName from './SetName'
import PlayerList from '../shared/PlayerList'

const getStateMessage = (gameState) => {
    switch(gameState) {
        case GameState.WAITING_FOR_PLAYERS:
            return 'Waiting for players'
        case GameState.SETTING_UP_RULES:
            return 'Waiting for host to setup rules'
        default:
            return ''
    }
}

const PlayerLobbyLayout = ({gameState, nameSet}) => {
    if(!nameSet)
        return (
            <div className="player-lobby-container">
                <SetName/>
            </div>
        )
    else
        return (
            <div className="player-lobby-container">
                <h2>{getStateMessage(gameState)}</h2>
                <PlayerList/>
            </div>
        )
}

const mapStateToProps = state => {
    return {
        gameState: state.game.get('gameState'),
        nameSet: state.session.get('nameSet')
    }
}

export default connect(mapStateToProps)(PlayerLobbyLayout)