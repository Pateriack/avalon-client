import React from 'react'
import {connect} from 'react-redux'

import * as GameState from '../../constants/GameState'
import PlayerList from '../shared/PlayerList'
import SelectPlayers from './SelectPlayers'
import AcceptReject from './AcceptReject'

const PlayerPartySelectionLayout = ({gameState, leader}) => {
    let headerMessage = null
    let list = null
    let voteButtons = null
    switch(gameState) {
        case GameState.CHOOSING_PARTY:
            headerMessage = leader ? 'Choose your party!' : 'Waiting for leader to choose party..'
            list = leader ? <SelectPlayers/> : <PlayerList/>
            break

        case GameState.VOTING_ON_PARTY:
            headerMessage = 'Voting on party.'
            list = <PlayerList/>
            voteButtons = <AcceptReject/>
            break

        case GameState.PARTY_VOTE_RESULTS:
            headerMessage = 'Vote results'
            list = <PlayerList/>
            break

        default:
    }
    return (
        <div className="party-selection-container">
            <h3>{headerMessage}</h3>
            {list}
            {voteButtons}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        gameState: state.game.get('gameState'),
        leader: state.session.get('leader')
    }
}

export default connect(mapStateToProps)(PlayerPartySelectionLayout)