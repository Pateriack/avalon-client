import React, {Component} from 'react'
import * as questStatus from '../constants/questStatus'

export default class QuestMarker extends Component {
    render() {
        switch(this.props.questStatus) {
            case questStatus.QUEST_NOT_STARTED:
            case questStatus.QUEST_IN_PROGRESS:
                return (
                    <div className={this.props.questStatus === questStatus.QUEST_IN_PROGRESS ? 'quest-marker quest-in-progress' : 'quest-marker'}>
                        <span className="quest-number">Quest {this.props.questNumber}</span>
                        <span className="quest-players">{this.props.questPlayers}</span>
                    </div>
                )
            case questStatus.QUEST_GOOD_WON:
                return (
                    <div className="quest-marker quest-good-won">
                        Good Won
                    </div>
                )
            case questStatus.QUEST_EVIL_WON:
                return (
                    <div className="quest-marker quest-evil-won">
                        Evil Won
                    </div>
                )
        }
    }
}