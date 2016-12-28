import React from 'react'
import {connect} from 'react-redux'

import * as GameState from '../../constants/GameState'
import PlayerLobbyLayout from './PlayerLobbyLayout'
import PlayerPartySelectionLayout from './PlayerPartySelectionLayout'

const getLayout = (gameState) => {
    switch(gameState) {
        case GameState.WAITING_FOR_PLAYERS:
        case GameState.SETTING_UP_RULES:
            return <PlayerLobbyLayout/>

        case GameState.CHOOSING_PARTY:
        case GameState.VOTING_ON_PARTY:
        case GameState.PARTY_VOTE_RESULTS:
            return <PlayerPartySelectionLayout/>

        default:
            return null
    }
}

const PlayerLayout = ({gameState}) => {
    const layout = getLayout(gameState)
    return (
        <div className="player-container">
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