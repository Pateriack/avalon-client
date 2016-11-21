import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createAvalonStore } from './store'
import App from './App'
import './index.css'

const store = createAvalonStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
