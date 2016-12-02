import React from 'react'
import ReactDOM from 'react-dom'
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass,
    Simulate
} from 'react-addons-test-utils'
import {expect} from 'chai'

import Quests from '../../src/components/Quests'
import * as questStatus from '../../src/constants/questStatus'

describe('Quests', () => {

    const quests = [
        {number: 1, players: 2, status: questStatus.QUEST_EVIL_WON},
        {number: 2, players: 2, status: questStatus.QUEST_GOOD_WON},
        {number: 3, players: 3, status: questStatus.QUEST_IN_PROGRESS},
        {number: 4, players: 3, status: questStatus.QUEST_NOT_STARTED},
        {number: 5, players: 3, status: questStatus.QUEST_NOT_STARTED}
    ]

    it('renders a .quests div', () => {
        const component = renderIntoDocument(
            <Quests quests={quests}/>
        )
        const questsDiv = findRenderedDOMComponentWithClass(component, 'quests')

        expect(questsDiv).to.exist
    })

    it('renders a .quest-marker for each quest', () => {
        const component = renderIntoDocument(
            <Quests quests={quests}/>
        )
        const questMarkers = scryRenderedDOMComponentsWithClass(component, 'quest-marker')

        expect(questMarkers.length).to.equal(quests.length)
    })

})