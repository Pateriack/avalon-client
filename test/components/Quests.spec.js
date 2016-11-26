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
        {questNumber: 1, questPlayers: 2, questStatus: questStatus.QUEST_EVIL_WON},
        {questNumber: 2, questPlayers: 2, questStatus: questStatus.QUEST_GOOD_WON},
        {questNumber: 3, questPlayers: 3, questStatus: questStatus.QUEST_IN_PROGRESS},
        {questNumber: 4, questPlayers: 3, questStatus: questStatus.QUEST_NOT_STARTED},
        {questNumber: 5, questPlayers: 3, questStatus: questStatus.QUEST_NOT_STARTED}
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