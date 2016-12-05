import React from 'react'
import {connect} from 'react-redux'

import * as GameState from '../../constants/GameState'
import PlayerLobbyLayout from './PlayerLobbyLayout'

const getLayout = (gameState) => {
    switch(gameState) {
        case GameState.WAITING_FOR_PLAYERS:
        case GameState.SETTING_UP_RULES:
            return <PlayerLobbyLayout/>
        default:
            return null
    }
}

const PlayerLayout = ({gameState}) => {
    const layout = getLayout(gameState)
    return (
        <div className="player-container">
            <h1>Player</h1>
            {layout}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        gameState: state.game.get('gameState')
    }
}

export default connect(mapStateToProps)(PlayerLayout)