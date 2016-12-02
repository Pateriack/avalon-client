//eslint-disable-next-line
import React from 'react'
import { connect } from 'react-redux'

import Quests from '../components/Quests'

const mapStateToProps = (state) => {
    return {
        quests: state.quests
    }
}

export default connect(
    mapStateToProps
)(Quests)