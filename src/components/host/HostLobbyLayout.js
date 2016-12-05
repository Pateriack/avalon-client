import React from 'react'
import {connect} from 'react-redux'

import {startSetup} from '../../actions/hostActions'
import PlayerList from '../shared/PlayerList'

const HostLobbyLayout = ({numPlayers, startSetup}) => {
    return (
        <div className="host-lobby-container">
            <button onClick={startSetup} disabled={numPlayers < 5}>Start Setup</button><br/>
            {numPlayers} players
            <PlayerList/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numPlayers: state.players.size > 1 ? state.players.size - 1 : 0
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startSetup: () => dispatch(startSetup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostLobbyLayout)