// in this file we're going to export our actions
export const ADD_TO_FAV = 'ADD_TO_FAV'
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV'
export const GET_JOBS = 'GET_JOBS'
export const TOGGLE_LOADER = 'TOGGLE_LOADER'
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR'

// this is called an ACTION CREATOR
// a function that returns an action (a JS object)

export const addToFav = (company) => ({
  type: ADD_TO_FAV,
  payload: company, // this is going to be the company we intend to add to the favourites list
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
})

export const removeFromFav = (company) => ({
  type: REMOVE_FROM_FAV,
  payload: company,
})
// the function returns an object, so you can dispatch it INSTEAD of dispatching the object

// REDUX THUNK:
// if you have redux-thunk injected in the flow, you can do more with your action creators.
// with redux thunk you can return out of them not just simple actions, but FUNCTIONS.
// and these functions can be even ASYNC, so you can do even FETCHES inside of them!

export const getJobsAction = (baseURL, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseURL + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()

        dispatch({
          type: GET_JOBS,
          payload: data,
        })
        setTimeout(() => {
          dispatch({
            type: TOGGLE_LOADER,
            payload: false,
          })
        }, 1000)
      } else {
        dispatch({
          type: GET_JOBS_ERROR,
        })
        dispatch({
          type: TOGGLE_LOADER,
          payload: false,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_JOBS_ERROR,
      })
      dispatch({
        type: TOGGLE_LOADER,
        payload: false,
      })
    }
  }
}