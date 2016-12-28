import React from 'react'
import {connect} from 'react-redux'

// import * as GameState from '../../constants/GameState'

const PlayerList = ({players, pickParty}) => {
    return (
        <div className="player-list">
            <ul>
                {players.map((player, index) =>
                    <li key={index}>
                        {player.name} {player.leader && "- Party Leader"}
                    </li>
                )}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.players.toJSON().filter(player => player.player)
    }
}

export default connect(mapStateToProps)(PlayerList)