import React from 'react'
import {connect} from 'react-redux'

import {togglePartyMember} from '../../actions/playerActions'
import {getPartySizeForQuest} from '../../utils'

const SelectPlayers = ({players, partySize, playersSelected, playersToSelect, togglePlayer}) => {
    return (
        <div className="select-players">
            <ul>
                {players.map((player, index) =>
                    <li key={index} onClick={() => togglePlayer(player.id)}>
                        {player.name} {player.leader && "- Party Leader"}
                    </li>
                )}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    const players = state.players.toJSON().filter(player => player.player)
    const numPlayers = players.length - 1
    const questNumber = state.game.get('activeQuest')
    const partySize = getPartySizeForQuest(numPlayers, questNumber)
    const playersSelected = players.reduce((count, player) => player.party ? count + 1 : count, 0)
    const playersToSelect = partySize - playersSelected
    return {
        players,
        partySize,
        playersSelected,
        playersToSelect
    }
}

const mapDispatchToProps = dispatch => {
    return {
        togglePlayer: playerId => dispatch(togglePartyMember(playerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayers)