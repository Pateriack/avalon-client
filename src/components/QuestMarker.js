import React, {Component} from 'react'

import * as questStatus from '../constants/questStatus'
import './QuestMarker.css'

export default class QuestMarker extends Component {
    render() {
        switch(this.props.status) {
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
            default:
                return (
                    <div className={this.props.status === questStatus.QUEST_IN_PROGRESS ? 'quest-marker quest-in-progress' : 'quest-marker'}>
                        <span className="quest-number">
                            <span className="char-1">Q</span>
                            <span className="char-2">u</span>
                            <span className="char-3">e</span>
                            <span className="char-4">s</span>
                            <span className="char-5">t</span>
                            <span className="char-6">{this.props.number}</span>
                        </span>
                        <span className="quest-players">
                            {this.props.players}
                        </span>
                    </div>
                )
        }
    }
}