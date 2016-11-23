import React from 'react'
import ReactDOM from 'react-dom'
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils'
import {expect} from 'chai'

import PlayerList from './PlayerList'

describe('PlayerList', () => {

    it('renders a list item for each player', () => {
        const players = [
            {number: 1, name: 'Player 1'},
            {number: 2, name: 'Player 2'},
            {number: 3, name: 'Player 3'}
        ]

        const component = renderIntoDocument(
            <PlayerList players={players}/>
        )

        const items = scryRenderedDOMComponentsWithTag(component, 'li')

        expect(items.length).to.equal(players.length)
        for(var i in players.length)
            expect(items[i].textContent).to.equal(players[i].name)
    })

})