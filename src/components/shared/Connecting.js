import React from 'react'
import {connect} from 'react-redux'

import './Connecting.css'

const Connecting = ({connected}) => {
    return (
        <div className={connected ? 'connecting' : 'connecting in'}>
            <h1>Connecting..</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {connected: state.session.get('connected')}
}

export default connect(mapStateToProps)(Connecting)