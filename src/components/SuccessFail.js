import React, {Component} from 'react'

import * as votes from '../constants/votes'

export default class SuccessFail extends Component {
    render() {
        return (
            <div className="success-fail">
                <button
                    type="button"
                    className="success-fail-button success-button"
                    onClick={() => this.props.onClick(votes.SUCCESS)}
                >Success</button>
                <button
                    type="button"
                    className="success-fail-button fail-button"
                    onClick={() => this.props.onClick(votes.FAIL)}
                >Success</button>
            </div>
        )
    }
}