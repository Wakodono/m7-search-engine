import { initialState } from "../index";
import { GET_JOBS } from "../actions";

export default function jobsReducer(state = initialState.jobs, action) {

  const { type, payload } = action;

  switch (type) {
    case GET_JOBS:
      return {
        ...state,
        elements: payload,
      };
    default:
      return state;
  }
}