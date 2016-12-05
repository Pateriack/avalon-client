import React from 'react'
import ReactDOM from 'react-dom'
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils'
import {expect} from 'chai'

import InfoCard from '../../src/components/player/InfoCard'
import * as roles from '../../src/constants/Roles'
import * as teams from '../../src/constants/Teams'

describe('InfoCard', () => {

    it('renders .info-card div', () => {
        const props = {
            team: teams.GOOD_TEAM,
            roles: roles.ROLE_GOOD
        }

        const component = renderIntoDocument(
            <InfoCard {...props}/>
        )
        const div = findRenderedDOMComponentWithClass(component, 'info-card')

        expect(div).to.exist
    })

    it('renders .info-card-player div', () => {
        const props = {
            team: teams.GOOD_TEAM,
            roles: roles.ROLE_GOOD
        }

        const component = renderIntoDocument(
            <InfoCard {...props}/>
        )
        const div = findRenderedDOMComponentWithClass(component, 'info-card-player')

        expect(div).to.exist
    })

})