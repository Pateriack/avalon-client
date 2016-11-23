import React, { Component } from 'react'

export default class PlayerList extends Component {
    render() {
        return (
            <ul>
                {this.props.players.map(player =>
                    <li key={player.number}>
                        {player.name}
                    </li>
                )}
            </ul>
        )
    }
}