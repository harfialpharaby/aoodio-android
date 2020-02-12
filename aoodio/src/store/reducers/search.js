import { SEARCH, NULLIFY } from "../actionTypes";

const initialState = {
  input: ""
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case NULLIFY:
      return {
        ...state,
        input: ""
      };
    case SEARCH:
      return {
        ...state,
        input: action.input
      };
    default:
      return state;
  }
}
