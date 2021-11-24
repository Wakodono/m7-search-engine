import { createStore } from 'redux'
import jobReducer from '../reducers'

// my suggestion to start is to think as the FIRST THING about your STORE SHAPE
// I'm planning to use the redux store for sharing the CART and also give to the store
// initial values

export const initialState = {
  // I'm planning to store the application jobs
  job: {
    listings: [],
  },
}

const configureStore = createStore(
  jobReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore