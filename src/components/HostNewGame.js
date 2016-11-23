import React, {Component} from 'react'

export default class HostNewGame extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>Host New Game</button>
        )
    }
}