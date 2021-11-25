// in this file we're going to export our actions

// this is called an ACTION CREATOR
// a function that returns an action (a JS object)

export const addToFav = (comany) => ({
  type: 'ADD_TO_FAV',
  payload: company, // this is going to be the listing we intend to add to the jobs
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
})

export const removeFromFav = (company) => ({
  type: 'REMOVE_FROM_FAV',
  payload: company,
})
// the function returns an object, so you can dispatch it INSTEAD of dispatching the object
