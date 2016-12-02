import React, {Component} from 'react'
import {connect} from 'react-redux'

import './Connecting.css'

class Connecting extends Component {
    render() {
        let {connected} = this.props
        return (
            <div className={connected ? 'connecting' : 'connecting in'}>
                <h1>Connecting..</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {connected: state.session.connected}
}

export default connect(
    mapStateToProps
)(Connecting)