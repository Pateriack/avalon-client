import React, {Component} from 'react'

import './Quests.css'
import QuestMarker from './QuestMarker'

export default class Quests extends Component {
    render() {
        return (
            <div className="quests">
                {this.props.quests.map(quest =>
                    <QuestMarker key={quest.number} {...quest}/>
                )}
            </div>
        )
    }
}
