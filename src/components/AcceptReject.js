import React, {Component} from 'react'

import * as votes from '../constants/votes'

export default class AcceptReject extends Component {
    render() {
        return (
            <div className="accept-reject">
                <button
                    type="button"
                    className="accept-reject-button accept-button"
                    onClick={() => this.props.onClick(votes.ACCEPT)}
                >Accept</button>
                <button
                    type="button"
                    className="accept-reject-button reject-button"
                    onClick={() => this.props.onClick(votes.REJECT)}
                >Accept</button>
            </div>
        )
    }
}