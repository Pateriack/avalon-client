import React from 'react'

import * as votes from '../../constants/Votes'

export default ({onClick}) => {
    return (
        <div className="accept-reject">
            <button
                type="button"
                className="accept-reject-button accept-button"
                onClick={() => onClick(votes.ACCEPT)}
            >Accept</button>
            <button
                type="button"
                className="accept-reject-button reject-button"
                onClick={() => onClick(votes.REJECT)}
            >Accept</button>
        </div>
    )
}