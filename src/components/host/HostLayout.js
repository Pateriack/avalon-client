import React from 'react'
import {connect} from 'react-redux'

import * as GameState from '../../constants/GameState'
import HostLobbyLayout from './HostLobbyLayout'
import HostSetupLayout from './HostSetupLayout'

const getLayout = (gameState) => {
    switch(gameState) {
        case GameState.WAITING_FOR_PLAYERS:
            return <HostLobbyLayout/>

        case GameState.SETTING_UP_RULES:
            return <HostSetupLayout/>

        default:
            return null
    }
}

const HostLayout = ({gameState}) => {
    const layout = getLayout(gameState)
    return (
        <div className="host-container">
            <h1>Host</h1>
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

