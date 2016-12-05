import React from 'react'

import * as votes from '../../constants/Votes'

export default ({onClick}) => {
    return (
        <div className="success-fail">
            <button
                type="button"
                className="success-fail-button success-button"
                onClick={() => onClick(votes.SUCCESS)}
            >Success</button>
            <button
                type="button"
                className="success-fail-button fail-button"
                onClick={() => onClick(votes.FAIL)}
            >Success</button>
        </div>
    )
}