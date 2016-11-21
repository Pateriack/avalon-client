import { createStore } from 'redux'
import rootReducer from '../reducers'

export const createAvalonStore = () => {
    return createStore(rootReducer)
}