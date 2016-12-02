import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as AppState from '../constants/AppState'
import './App.css'

import Connecting from './Connecting'
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
        let {appState} = this.props

        const layout = getLayout(appState)

        return (
            <div className='app'>
                <Connecting />
                {layout}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let appState

    if(!state.session.gameId) {
        appState = AppState.HOME
    }else{
        if(state.session.playerNumber === 0) {
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