export const REMOVE_LISTINGS = 'REMOVE_LISTINGS'
export const ADD_TO_JOBS = 'ADD_TO_JOBS'

// in this file we're going to export our actions

// this is called an ACTION CREATOR
// a function that returns an action (a JS object)

export const addToJobsAction = (jobToAdd) => ({
  type: ADD_TO_JOBS,
  payload: jobToAdd, // this is going to be the listing we intend to add to the jobs
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
})

export const removeFromJobsAction = (indexToRemove) => ({
  type: REMOVE_LISTINGS,
  payload: indexToRemove,
})
// the function returns an object, so you can dispatch it INSTEAD of dispatching the object
