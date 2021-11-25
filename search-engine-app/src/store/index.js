import { createStore } from 'redux'
import mainReducer from './reducers'

// import thunk from 'redux-thunk'

const superCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



export default createStore(mainReducer)