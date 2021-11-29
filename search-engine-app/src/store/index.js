import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import favouritesReducer from './reducers/favourites'
import jobsReducer from './reducers/jobs'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// our storage currently points to the localStorage

import { encryptTransform } from 'redux-persist-transform-encrypt'

export const initialState = {
    favourites: {
        elements: [],
    },
    jobs: {
        elements: [],
        isLoading: false,
        isError: false,
    },
}

// import thunk from 'redux-thunk' and allow redux dev tools functionality in browser
const superCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'root',
    storage,
    //transforms will go here when we want to encrypt our persisted storage
}

const mainReducer = combineReducers({
    favourites: favouritesReducer,
    jobs: jobsReducer,
})

const persistedMainReducer = persistReducer(persistConfig, mainReducer)

const configureStore = createStore(persistedMainReducer, initialState, superCompose(applyMiddleware(thunk)))

export const persistor = persistStore(configureStore)

export default configureStore