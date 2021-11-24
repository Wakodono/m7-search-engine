import { ADD_JOB_LISTING, REMOVE_JOB_LISTING } from '../actions'
import { initialState } from '../store'

// the reducer's job is ALWAYS to return a valid state for the application
// the SHAPE of the state you're supposed to return from every case is the SAME
// as the initialValue you're providing to it

// a PURE FUNCTION never mutates its arguments

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_JOB_LISTING:
        return {
          ...state,
          job: {
            ...state.job,
            // SUPER WRONG --> state.job.listings.push(action.payload) // action.payload
            // THIS WORKS: content: state.job.listings.concat(action.payload),
            listings: [...state.job.listings, action.payload], // <- the smooth Stefano way
          },
        }
      case REMOVE_JOB_LISTING:
        return {
          ...state,
          job: {
            ...state.job,
            listings: state.job.listings.filter((el, i) => i !== action.payload), // <- it works!
            //   listings: [...state.job.listings.slice(0, action.payload), ...state.job.listings.slice(action.payload + 1)],
            // this also works, though it's hella complex... :'D)
          },
        }
      default:
        return state
    }
  }
  
  export default jobReducer