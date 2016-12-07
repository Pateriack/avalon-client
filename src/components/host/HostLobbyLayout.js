import React from 'react'
import {connect} from 'react-redux'

import {startSetup} from '../../actions/hostActions'
import PlayerList from '../shared/PlayerList'

const HostLobbyLayout = ({numPlayers, startSetup, gameId}) => {
    return (
        <div className="host-lobby-container">
            <h3>Game ID: {gameId}</h3>
            {numPlayers} players<br/>
            <PlayerList/>
            <button onClick={startSetup} disabled={numPlayers < 5}>Start Setup</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numPlayers: state.players.size > 1 ? state.players.size - 1 : 0,
        gameId: state.game.get('gameId')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startSetup: () => dispatch(startSetup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostLobbyLayout)