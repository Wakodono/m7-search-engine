import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import favouritesReducer from './reducers/favourites'
import jobsReducer from './reducers/jobs'

export const initialState = {
    favourites: {
        elements: [],
    },
    jobs: {
        elements: [],
    },
}

// import thunk from 'redux-thunk' and allow redux dev tools functionality in browser
const superCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const mainReducer = combineReducers({
    favourites: favouritesReducer,
    jobs: jobsReducer,
})

export default createStore(
    mainReducer,
    initialState,
    superCompose(applyMiddleware(thunk))
)