import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as Roles from '../../constants/Roles'
import {getMaxNumberOfGoodAndEvilPlayers} from '../../utils'
import {submitRulesRequest} from '../../actions/hostActions'

class HostSetup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodLeft: props.maxGoodAndEvil.maxGood,
            evilLeft: props.maxGoodAndEvil.maxEvil,
            merlinAndAssassin: false,
            percival: false,
            morgana: false,
            mordred: false,
            oberon: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let changes = {
            [e.target.name]: e.target.checked
        }
        const modifier = e.target.checked ? 1 : -1
        switch(e.target.name) {
            case 'merlinAndAssassin':
                changes.goodLeft = this.state.goodLeft - modifier
                changes.evilLeft = this.state.evilLeft - modifier
                break
            case 'percival':
                changes.goodLeft = this.state.goodLeft - modifier
                break
            case 'morgana':
            case 'mordred':
            case 'oberon':
                changes.evilLeft = this.state.evilLeft - modifier
                break
            default:
        }
        this.setState(changes)
    }

    handleSubmit() {
        let roles = []
        if(this.state.merlinAndAssassin) {
            roles.push(Roles.ROLE_MERLIN)
            roles.push(Roles.ROLE_ASSASSIN)
        }
        if(this.state.percival)
            roles.push(Roles.ROLE_PERCIVAL)
        if(this.state.morgana)
            roles.push(Roles.ROLE_MORGANA)
        if(this.state.mordred)
            roles.push(Roles.ROLE_MORDRED)
        if(this.state.oberon)
            roles.push(Roles.ROLE_OBERON)
        for(let i = 0; i < this.state.goodLeft; i++)
            roles.push(Roles.ROLE_GOOD)
        for(let i = 0; i < this.state.evilLeft; i++)
            roles.push(Roles.ROLE_EVIL)
        this.props.submitRules({roles})
    }

    render() {
        const {numPlayers, maxGoodAndEvil} = this.props
        const {maxGood, maxEvil} = maxGoodAndEvil
        return (
            <div className="host-setup">
                <h2>Set Rules</h2>
                {numPlayers} total players<br/>
                {maxGood} good players<br/>
                {maxEvil} evil players<br/>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="merlinAndAssassin"
                        checked={this.state.merlinAndAssassin}
                        onChange={this.handleChange}
                        disabled={!this.state.merlinAndAssassin && (this.state.goodLeft === 0 || this.state.evilLeft === 0)}
                    />
                    Merlin and Assassin
                </label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="percival"
                        checked={this.state.percival}
                        onChange={this.handleChange}
                        disabled={!this.state.percival && this.state.goodLeft === 0}
                    />
                    Percival
                </label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="morgana"
                        checked={this.state.morgana}
                        onChange={this.handleChange}
                        disabled={!this.state.morgana && this.state.evilLeft === 0}
                    />
                    Morgana
                </label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="mordred"
                        checked={this.state.mordred}
                        onChange={this.handleChange}
                        disabled={!this.state.mordred && this.state.evilLeft === 0}
                    />
                    Mordred
                </label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="oberon"
                        checked={this.state.oberon}
                        onChange={this.handleChange}
                        disabled={!this.state.oberon && this.state.evilLeft === 0}
                    />
                    Oberon
                </label>
                <br/>
                <button onClick={this.handleSubmit}>Go!</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const numPlayers = state.players.size > 1 ? state.players.size - 1 : 0
    const maxGoodAndEvil = getMaxNumberOfGoodAndEvilPlayers(numPlayers)
    return {
        numPlayers,
        maxGoodAndEvil
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitRules: rules => dispatch(submitRulesRequest(rules))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostSetup)