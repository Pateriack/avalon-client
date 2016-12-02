import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as AppState from '../constants/appState'
import './App.css'
import HomeLayout from './HomeLayout'
import HostLayout from './HostLayout'
import PlayerLayout from './PlayerLayout'

const getLayout = (appState) => {
    switch(appState) {
        case AppState.HOST:
            return <HostLayout/>
        case AppState.PLAYER:
            return <PlayerLayout/>
        case AppState.HOME:
        default:
            return <HomeLayout/>
    }
}

class App extends Component {
    render() {
        const layout = getLayout(this.props.appState)

        return (
            <div className="app">
                {layout}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let appState
    if(!state.game.gameId) {
        appState = AppState.HOME
    }else{
        if(state.game.playerNumber === 0) {
            appState = AppState.HOST
        }else{
            appState = AppState.PLAYER
        }
    }

    return {appState}
}

export default connect(
    mapStateToProps
)(App)