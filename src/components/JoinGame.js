import React, {Component} from 'react'

export default class JoinGame extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    placeholder="Enter game code"
                    value={this.state.value}
                    ref="input"
                />
                <button type="submit">Join Game</button>
            </form>
        )
    }
}