import React from 'react'
import {connect} from 'react-redux'

import * as GameState from '../../constants/GameState'
import HostLobbyLayout from './HostLobbyLayout'
import HostSetupLayout from './HostSetupLayout'
import HostGameLayout from './HostGameLayout'
import './HostLayout.css'

const getLayout = (gameState) => {
    switch(gameState) {
        case GameState.WAITING_FOR_PLAYERS:
            return <HostLobbyLayout/>

        case GameState.SETTING_UP_RULES:
            return <HostSetupLayout/>

        case GameState.CHOOSING_PARTY:
        case GameState.VOTING_ON_PARTY:
        case GameState.PARTY_VOTE_RESULTS:
        case GameState.VOTING_ON_QUEST:
        case GameState.QUEST_VOTE_RESULTS:
        case GameState.ASSASSINATION:
            return <HostGameLayout/>

        default:
            return null
    }
}

const HostLayout = ({gameState}) => {
    const layout = getLayout(gameState)
    return (
        <div className="host-container">
            {layout}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        gameState: state.game.get('gameState')
    }
}

export default connect(mapStateToProps)(HostLayout)

