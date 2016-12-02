import React, {Component} from 'react'

import * as roles from '../constants/Roles'
import * as teams from '../constants/Teams'

export default class InfoCard extends Component {
    render() {
        return (
            <div className={this.props.show ? 'info-card show' : 'info-card'}>
                <div className={this.props.team === teams.GOOD_TEAM ? 'info-card-player good' : 'info-card-player evil'}>
                    <span className="role-text">{roles.roleToText(this.props.role)}</span>
                    <span className="role-subtext">{roles.roleToSubtext(this.props.role)}</span>
                </div>
            </div>
        )
    }
}