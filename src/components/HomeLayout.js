import React, {Component} from 'react'

import './HomeLayout.css'

class HomeLayout extends Component {
    render() {
        return (
            <div className="home-container">
                <h1>Avalon</h1>
                <div className="home-controls">
                    <form onSubmit={e => e.preventDefault()}>
                        <input className="join-code" value="x6gu3f"/>
                        <button type="submit" className="join-button">Join Game</button>
                    </form>
                    <button className="host-button">Host Game</button>
                </div>
            </div>
        )
    }
}

export default HomeLayout