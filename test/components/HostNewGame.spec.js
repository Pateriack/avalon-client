import React from 'react'
import ReactDOM from 'react-dom'
import {
    renderIntoDocument,
    findRenderedDOMComponentWithTag,
    Simulate
} from 'react-addons-test-utils'
import {expect} from 'chai'

import HostNewGame from '../../src/components/HostNewGame'

describe('HostNewGame', () => {

    it('renders a button', () => {
        const component = renderIntoDocument(
            <HostNewGame/>
        )

        const button = findRenderedDOMComponentWithTag(component, 'button')

        expect(button).to.exist
        expect(button.textContent).to.equal('Host New Game')
    })

    it('invokes a callback when clicked', () => {
        let clicked = false

        const component = renderIntoDocument(
            <HostNewGame onClick={() => clicked = true}/>
        )

        const button = findRenderedDOMComponentWithTag(component, 'button')

        Simulate.click(button)

        expect(clicked).to.equal(true)
    })

})