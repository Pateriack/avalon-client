import React from 'react'
import ReactDOM from 'react-dom'
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils'
import {expect} from 'chai'

import QuestMarker from '../../src/components/QuestMarker'
import * as questStatus from '../../src/constants/questStatus'

describe('QuestMarker', () => {

    it('renders a .quest-marker div when not started', () => {
        const component = renderIntoDocument(
            <QuestMarker questStatus={questStatus.QUEST_NOT_STARTED} questNumber={1} questPlayers={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-marker')

        expect(markerDiv).to.exist
    })

    it('has .quest-number and .quest-players when not started', () => {
        const component = renderIntoDocument(
            <QuestMarker questStatus={questStatus.QUEST_NOT_STARTED} questNumber={1} questPlayers={2}/>
        )
        const questNumber = findRenderedDOMComponentWithClass(component, 'quest-number')
        const questPlayers = findRenderedDOMComponentWithClass(component, 'quest-players')

        expect(questNumber).to.exist
        expect(questNumber.textContent).to.equal('Quest 1')
        expect(questPlayers).to.exist
        expect(questPlayers.textContent).to.equal('2')
    })

    it('renders a .quest-marker div when in progress', () => {
        const component = renderIntoDocument(
            <QuestMarker questStatus={questStatus.QUEST_IN_PROGRESS} questNumber={1} questPlayers={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-marker')

        expect(markerDiv).to.exist
    })

    it('has .quest-number and .quest-players when in progress', () => {
        const component = renderIntoDocument(
            <QuestMarker questStatus={questStatus.QUEST_IN_PROGRESS} questNumber={1} questPlayers={2}/>
        )
        const questNumber = findRenderedDOMComponentWithClass(component, 'quest-number')
        const questPlayers = findRenderedDOMComponentWithClass(component, 'quest-players')

        expect(questNumber).to.exist
        expect(questNumber.textContent).to.equal('Quest 1')
        expect(questPlayers).to.exist
        expect(questPlayers.textContent).to.equal('2')
    })

    it('renders a .quest-marker div when good won', () => {
        const component = renderIntoDocument(
            <QuestMarker questStatus={questStatus.QUEST_GOOD_WON} questNumber={1} questPlayers={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-marker')

        expect(markerDiv).to.exist
    })

    it('has .quest-good-won when good won', () => {
        const component = renderIntoDocument(
            <QuestMarker questStatus={questStatus.QUEST_GOOD_WON} questNumber={1} questPlayers={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-good-won')

        expect(markerDiv).to.exist
    })

    it('renders a .quest-marker div when evil won', () => {
        const component = renderIntoDocument(
            <QuestMarker questStatus={questStatus.QUEST_EVIL_WON} questNumber={1} questPlayers={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-marker')

        expect(markerDiv).to.exist
    })

    it('has .quest-evil-won when evil won', () => {
        const component = renderIntoDocument(
            <QuestMarker questStatus={questStatus.QUEST_EVIL_WON} questNumber={1} questPlayers={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-evil-won')

        expect(markerDiv).to.exist
    })
})