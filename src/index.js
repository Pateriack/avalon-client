import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import SocketIO from 'socket.io-client'

import { createAvalonStore } from './store'
import SocketHandler from './socket/SocketHandler'

import App from './components/App'
import './index.css'

const socket = SocketIO('http://localhost:3003')
const store = createAvalonStore(socket)
new SocketHandler(socket, store)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        ReactDOM.render(
            <Provider store={store}>
                <NextApp />
            </Provider>,
            document.getElementById('root')
        );
    });
}
