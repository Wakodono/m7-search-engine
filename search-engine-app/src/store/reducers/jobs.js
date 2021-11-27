import { initialState } from "../index";

export default function jobsReducer(state = initialState.jobs, action) {

  const { type, payload } = action;

  switch (type) {
    case "FETCH_JOBS":
      return {
        ...state,
        elements: payload,
      };
    default:
      return state;
  }
}