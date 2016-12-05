import React from 'react'
import {connect} from 'react-redux'

import {hostGame, joinGame} from '../../actions/gameActions'
import HostNewGame from './HostNewGame'
import JoinGame from './JoinGame'
import './HomeLayout.css'

const HomeLayout = ({onClickJoinGame, onClickHostGame}) => {
    return (
        <div className="home-container">
            <h1>Avalon</h1>
            <div className="home-controls">
                <JoinGame onSubmit={onClickJoinGame}/>
                <HostNewGame onClick={onClickHostGame}/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickHostGame: () => dispatch(hostGame()),
        onClickJoinGame: gameId => dispatch(joinGame(gameId))
    }
}

export default connect(null, mapDispatchToProps)(HomeLayout)