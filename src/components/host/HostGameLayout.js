import React from 'react'
import {connect} from 'react-redux'

import Quests from './Quests'

const HostGameLayout = () => {
    return (
        <div className="host-game-container">
            <Quests/>
        </div>
    )
}

export default HostGameLayout