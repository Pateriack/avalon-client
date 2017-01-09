import React, {Component} from 'react'
import {connect} from 'react-redux'

import {togglePartyMember, confirmPartyRequest} from '../../actions/playerActions'
import {getPartySizeForQuest} from '../../utils'

class SelectPlayers extends Component {
    render() {
        let {players, partySize, playersSelected, playersToSelect, togglePlayer, confirmParty} = this.props
        let playersToSelectMessage
        if(playersToSelect === 0)
            playersToSelectMessage = 'Party Full'
        else if(playersToSelect === 1)
            playersToSelectMessage = 'Select 1 more player'
        else
            playersToSelectMessage = `Select ${playersToSelect} more players`
        return (
            <div className="select-players">
                <span>{playersToSelectMessage}</span>
                <ul>
                    {players.map((player, index) =>
                        <li key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={player.party}
                                    onClick={() => togglePlayer(player.id)}
                                    disabled={playersToSelect <= 0 && !player.party}
                                />
                                {player.name} {player.leader && "- Party Leader"}
                            </label>
                        </li>
                    )}
                </ul>
                <button
                    className="submit-party-button"
                    onClick={() => confirmParty()}
                    disabled={playersToSelect > 0}
                >
                    Confirm Party
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const players = state.players.toJSON().filter(player => player.player)
    const numPlayers = players.length
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
        togglePlayer: playerId => dispatch(togglePartyMember(playerId)),
        confirmParty: () => dispatch(confirmPartyRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayers)