import React from 'react'
import {connect} from 'react-redux'

import './Quests.css'
import QuestMarker from './QuestMarker'

const Quests = ({quests}) => {
    return (
        <div className="quests">
            {quests.map(quest =>
                <QuestMarker key={quest.number} {...quest}/>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quests: state.quests.toJSON()
    }
}

export default connect(mapStateToProps)(Quests)