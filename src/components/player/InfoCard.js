import React from 'react'

import * as roles from '../../constants/Roles'
import * as teams from '../../constants/Teams'

const infoCard = ({show, team, role}) => {
    return (
        <div className={show ? 'info-card show' : 'info-card'}>
            <div className={team === teams.GOOD_TEAM ? 'info-card-player good' : 'info-card-player evil'}>
                <span className="role-text">{roles.roleToText(role)}</span>
                <span className="role-subtext">{roles.roleToSubtext(role)}</span>
            </div>
        </div>
    )
}

export default InfoCard