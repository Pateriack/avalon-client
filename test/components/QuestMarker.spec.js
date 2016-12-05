import React from 'react'
import ReactDOM from 'react-dom'
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils'
import {expect} from 'chai'

import QuestMarker from '../../src/components/host/QuestMarker'
import * as questStatus from '../../src/constants/QuestStatus'

describe('QuestMarker', () => {

    it('renders a .quest-marker div when not started', () => {
        const component = renderIntoDocument(
            <QuestMarker status={questStatus.QUEST_NOT_STARTED} number={1} players={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-marker')

        expect(markerDiv).to.exist
    })

    it('has .quest-number and .quest-players when not started', () => {
        const component = renderIntoDocument(
            <QuestMarker status={questStatus.QUEST_NOT_STARTED} number={1} players={2}/>
        )
        const number = findRenderedDOMComponentWithClass(component, 'quest-number')
        const players = findRenderedDOMComponentWithClass(component, 'quest-players')

        expect(number).to.exist
        expect(number.textContent).to.equal('Quest1')
        expect(players).to.exist
        expect(players.textContent).to.equal('2')
    })

    it('renders a .quest-marker div when in progress', () => {
        const component = renderIntoDocument(
            <QuestMarker status={questStatus.QUEST_IN_PROGRESS} number={1} players={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-marker')

        expect(markerDiv).to.exist
    })

    it('has .quest-number and .quest-players when in progress', () => {
        const component = renderIntoDocument(
            <QuestMarker status={questStatus.QUEST_IN_PROGRESS} number={1} players={2}/>
        )
        const number = findRenderedDOMComponentWithClass(component, 'quest-number')
        const players = findRenderedDOMComponentWithClass(component, 'quest-players')

        expect(number).to.exist
        expect(number.textContent).to.equal('Quest1')
        expect(players).to.exist
        expect(players.textContent).to.equal('2')
    })

    it('renders a .quest-marker div when good won', () => {
        const component = renderIntoDocument(
            <QuestMarker status={questStatus.QUEST_GOOD_WON} number={1} players={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-marker')

        expect(markerDiv).to.exist
    })

    it('has .quest-good-won when good won', () => {
        const component = renderIntoDocument(
            <QuestMarker status={questStatus.QUEST_GOOD_WON} number={1} players={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-good-won')

        expect(markerDiv).to.exist
    })

    it('renders a .quest-marker div when evil won', () => {
        const component = renderIntoDocument(
            <QuestMarker status={questStatus.QUEST_EVIL_WON} number={1} players={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-marker')

        expect(markerDiv).to.exist
    })

    it('has .quest-evil-won when evil won', () => {
        const component = renderIntoDocument(
            <QuestMarker status={questStatus.QUEST_EVIL_WON} number={1} players={2}/>
        )
        const markerDiv = findRenderedDOMComponentWithClass(component, 'quest-evil-won')

        expect(markerDiv).to.exist
    })
})