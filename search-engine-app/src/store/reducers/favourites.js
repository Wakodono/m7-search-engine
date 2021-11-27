import { initialState } from '../index'


export default function favouritesReducer(
  state = initialState.favourites,
   action
   ) {

  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_FAV':
      return {
        ...state,
        elements: [...state.elements, payload],
      };
    case 'REMOVE_FROM_FAV':
      return {
        ...state,
        elements: state.elements.filter((company) => company !== payload),
      };
    default:
      return state;
  }
}
