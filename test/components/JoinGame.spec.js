import React from 'react'
import ReactDOM from 'react-dom'
import {
    renderIntoDocument,
    findRenderedDOMComponentWithTag,
    Simulate
} from 'react-addons-test-utils'
import {expect} from 'chai'
import sinon from 'sinon'

import JoinGame from '../../src/components/JoinGame'

describe('JoinGame', () => {

    it('renders a button and input', () => {
        const component = renderIntoDocument(
            <JoinGame/>
        )

        const button = findRenderedDOMComponentWithTag(component, 'button')
        const input = findRenderedDOMComponentWithTag(component, 'input')

        expect(button).to.exist
        expect(button.textContent).to.equal('Join Game')
        expect(input).to.exist
    })

    it('invokes callback with value from input when submitted', () => {
        const callback = sinon.spy()

        const component = renderIntoDocument(
            <JoinGame onSubmit={callback}/>
        )

        const input = component.refs.input
        const form = findRenderedDOMComponentWithTag(component, 'form')

        const testCode = 'ABC123'

        Simulate.change(input, { target: { value: testCode } })
        Simulate.submit(form)

        expect(callback).to.have.been.calledWith(testCode)
    })

})