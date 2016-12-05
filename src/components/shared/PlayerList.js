import React, { Component } from 'react'
import {connect} from 'react-redux'

class PlayerList extends Component {
    render() {
        return (
            <ul>
                {this.props.players.map((player, index) =>
                    <li key={index}>
                        {player.name}
                    </li>
                )}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players.toJSON().filter(player => player.player)
    }
}

export default connect(mapStateToProps)(PlayerList)