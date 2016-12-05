import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setName} from '../../actions/playerActions'

class SetName extends Component {
    constructor(props) {
        super(props)
        this.state = {value: props.name}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.value)
    }

    componentDidMount() {
        this.refs.value.focus()
    }

    render() {
        return (
            <div className="set-name">
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Enter your name"
                        ref="value"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.session.get('name')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: name => dispatch(setName(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetName)