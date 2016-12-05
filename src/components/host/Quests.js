import React from 'react'

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

export default Quests