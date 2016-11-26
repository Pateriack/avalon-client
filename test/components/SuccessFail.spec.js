import React from 'react'
import ReactDOM from 'react-dom'
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils'
import {expect} from 'chai'
import sinon from 'sinon'

import SuccessFail from '../../src/components/SuccessFail'
import * as votes from '../../src/constants/votes'

describe('SuccessFail', () => {

    it('renders a div with a "Success" button and "Fail" button', () => {
        const component = renderIntoDocument(
            <SuccessFail/>
        )
        const div = findRenderedDOMComponentWithClass(component, 'success-fail')
        const successButton = findRenderedDOMComponentWithClass(component, 'success-button')
        const failButton = findRenderedDOMComponentWithClass(component, 'fail-button')

        expect(div).to.exist
        expect(successButton).to.exist
        expect(failButton).to.exist
    })

    it('invokes a callback with the right value when a button is clicked', () => {
        const callback = sinon.spy()
        const component = renderIntoDocument(
            <SuccessFail onClick={callback} />
        )
        const successButton = findRenderedDOMComponentWithClass(component, 'success-button')
        const failButton = findRenderedDOMComponentWithClass(component, 'fail-button')

        Simulate.click(successButton)
        expect(callback).to.have.been.calledWith(votes.SUCCESS)

        Simulate.click(failButton)
        expect(callback).to.have.been.calledWith(votes.FAIL)
    })

})