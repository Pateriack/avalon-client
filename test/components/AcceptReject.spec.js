import React from 'react'
import ReactDOM from 'react-dom'
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils'
import {expect} from 'chai'
import sinon from 'sinon'

import AcceptReject from '../../src/components/AcceptReject'
import * as votes from '../../src/constants/votes'

describe('AcceptReject', () => {

    it('renders a div with an "Accept" button and a "Reject" button', () => {
        const component = renderIntoDocument(
            <AcceptReject/>
        )
        const div = findRenderedDOMComponentWithClass(component, 'accept-reject')
        const acceptButton = findRenderedDOMComponentWithClass(component, 'accept-button')
        const rejectButton = findRenderedDOMComponentWithClass(component, 'reject-button')

        expect(div).to.exist
        expect(acceptButton).to.exist
        expect(rejectButton).to.exist
    })

    it('invokes a callback with the right value when a button is clicked', () => {
        const callback = sinon.spy()
        const component = renderIntoDocument(
            <AcceptReject onClick={callback} />
        )
        const acceptButton = findRenderedDOMComponentWithClass(component, 'accept-button')
        const rejectButton = findRenderedDOMComponentWithClass(component, 'reject-button')

        Simulate.click(acceptButton)
        expect(callback).to.have.been.calledWith(votes.ACCEPT)

        Simulate.click(rejectButton)
        expect(callback).to.have.been.calledWith(votes.REJECT)
    })

})